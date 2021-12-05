<template>
  <div class="wrapper">
    <h1>ELGAMAL Signature Algorithm</h1>
    <div class="main">
      <div class="left">
        <h2>Отправитель</h2>
        <textarea class="text" cols="30" rows="10" v-model="m"></textarea>
        <button @click="start">Подписать</button>
        <br />
        Открытый ключ:
        <div>p: {{ p }}</div>
        <div>g: {{ g }}</div>
        <div>y: {{ y }}</div>
        <br />

        Закрытый ключ:
        <div>x: {{ x }}</div>
        <br />
        Дайджест:
        <div>{{ hash }}</div>

        <br />
        Сессионный ключ:
        <div>k: {{ k }}</div>

        <br />
        Шифротекст:
        <ol type="A">
          <li>{{ A }}</li>
          <li>{{ B }}</li>
        </ol>
      </div>
      <div class="right">
        <h2>Получатель</h2>
        <textarea class="text" cols="30" rows="10" v-model="send"></textarea>
        <br />
        <div>Вычисляемые значения</div>
        <hr width="100%" />

        <table cellspacing="0">
          <tr>
            <td>Дайджест</td>
            <td>{{ hash1 }}</td>
          </tr>
          <tr>
            <td>y<sup>A</sup> * A<sup>B</sup> (mod p)</td>
            <td>{{ check1(y, A, B, p) }}</td>
          </tr>
          <tr>
            <td>g<sup>hash</sup> (mod p)</td>
            <td>{{ check2(g, hash1, p) }}</td>
          </tr>
          <tr>
            <td colspan="2" :class="{ green: check(), red: !check() }">
              <div v-if="check()">Verified signature</div>
              <div v-else>Invalid signature</div>
            </td>
          </tr>
        </table>

        <br />
        <br />

        <div>Получаемые значения</div>
        <hr width="100%" />

        Открытый ключ:
        <div>p: {{ p }}</div>
        <div>g: {{ g }}</div>
        <div>y: {{ y }}</div>
        <br />

        Шифротекст:
        <div>
          <ol type="A">
            <li>{{ A }}</li>
            <li>{{ B }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import forge from "node-forge";
const bigInt = require("big-integer");

export default {
  name: "Main",
  data() {
    return {
      m: "SECRET Message",
      send: "",
      prime: null,
      p: null,
      g: null,
      x: null,
      y: null,
      k: null,
      A: null,
      B: null,
      salt: null,
      hash: null,
      hash1: null,
      bits: 24,
    };
  },
  watch: {
    m: function (val) {
      this.send = this.m;
      this.sign();
    },
    send: function (val) {
      this.check();
    },
  },
  mounted() {
    this.send = this.m;
    // this.start();
  },
  methods: {
    start() {
      // P - рандомное простое большое

      forge.prime.generateProbablePrime(this.bits, (err, num) => {
        this.prime = num.toString(10);
        this.p = bigInt(this.prime);
      });

      // g - рандомное простое меньше p
      this.g = bigInt(this.getRandomInt(this.prime));

      // x - рандомное простое меньше p-1
      this.x = bigInt(this.getRandomInt(this.prime - 1));

      // y = g^x mod p
      this.y = this.g.modPow(this.x, this.p);

      // Генерация хеша и дайджеста
      setTimeout(() => {
        this.sign();
      }, 100);
    },
    getRandomInt(max) {
      return BigInt(Math.floor(Math.random() * max).toString());
    },
    sign() {
      // Hash 1
      if (!this.m) {
        this.hash = 0;
        return;
      }
      let M = 0;
      this.m.split("").forEach((element) => {
        M += parseInt(element.charCodeAt(0));
      });
      this.hash = bigInt(M % this.p);

      // K - взаимно просто с p-1 и 1<k<p-1
      forge.prime.generateProbablePrime(this.bits, (err, num) => {
        this.k = bigInt(num.toString(10));
      });
      while (
        bigInt(this.p - 1).lesser(this.k) ||
        bigInt.gcd(this.k, this.p - 1).notEquals(1)
      ) {
        forge.prime.generateProbablePrime(this.bits, (err, num) => {
          this.k = bigInt(num.toString(10));
        });
      }

      // A = g^k mod p
      this.A = this.g.modPow(this.k, this.p);

      // B = (hash - xA )* k(-1) mod (p-1)
      let invK = bigInt(this.k).modInv(this.p - 1);

      const module = bigInt(this.p - 1);

      let mult = bigInt(this.x * this.A).mod(module);
      console.log(mult);

      let sub = bigInt(bigInt(bigInt(this.hash) - mult).mod(module) + module);
      console.log(sub);

      this.B = bigInt(bigInt(sub).multiply(invK)).mod(module);
    },

    check1(y, A, B, p) {
      if (y && A && B && p)
        return bigInt(
          bigInt(y).modPow(bigInt(A), bigInt(p)) *
            bigInt(A).modPow(bigInt(B), bigInt(p)),
        ).mod(bigInt(p));
      return "";
    },

    check2(g, hash1, p) {
      if (g && hash1 && p) return bigInt(g).modPow(bigInt(hash1), bigInt(p));
      return "";
    },
    check() {
      if (!this.send) {
        this.hash1 = 0;
        return;
      }
      let L = 0;
      this.send.split("").forEach((element) => {
        L += parseInt(element.charCodeAt(0));
      });
      this.hash1 = bigInt(L % this.p);

      return (
        this.check1(this.y, this.A, this.B, this.p).value ==
        this.check2(this.g, this.hash1, this.p).value
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  gap: 70px;

  h2 {
    width: 100%;
    text-align: center;
  }

  .right,
  .left {
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    ol {
      padding-left: 2rem;
      margin: 0;
      text-align: left;
      li {
        margin-left: 0;
        padding-left: 0;
      }
    }

    table {
      width: 100%;
      text-align: left;

      td {
        padding: 5px;
        border: 0px solid #dadada;
        &.green {
          background: #154715;
          text-align: center;
        }
        &.red {
          background: #671515;
          text-align: center;
        }
      }
    }

    .text {
      width: 300px;
      background: #00000077;
      color: #dadada;
      outline: none;
      border: 0;
      box-sizing: border-box;
      padding: 5px;
      height: 80px;
      border-radius: 2px;
      font-size: 1.2rem;
    }
  }
}
@media screen and (max-width: 670px) {
  .main {
    flex-direction: column;
    align-items: center;
  }
}
</style>
