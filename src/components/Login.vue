<template>
  <div>
    <h1>Please enter your password</h1>
    <div class="form">
      <div class="error" v-if="error">
        An error occured. Please try again!
      </div>
      <input type="password" v-on:keyup.enter="checkLogin" v-model="pw">
      <button type="submit" v-on:click="checkLogin">Login</button>
    </div>
  </div>
</template>

<script>
import * as Cookies from 'tiny-cookie'
import jsSHA from 'jssha'
// create your own secret hash (for example here: https://caligatio.github.io/jsSHA/)
const SECRET = '760aa5e0943be9e6644b9a1cec57c1caad7a5e1743f474eb1092d5b2489c2d15';
const PASSWORD_HASH = '3b9bf616da7314dc569d352c06cc2a55c8c19248a7e3f72cf7225245cff75b313c73a6a26bb594082e7706554a5404768e0aedee545721a7ff7bde1dad494d5d'
export default {
  name: 'Login',
  data () {
    return {
      pw: '',
      error: false
    }
  },
  methods: {
    checkLogin: function () {
      // this is not secure (!) & should be handled in the backend if necessary
      const pw = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
      pw.update(this.pw);
      pw.update(SECRET);
      if (pw.getHash("HEX") === PASSWORD_HASH) {
        const expiryDate = new Date()
        expiryDate.setMonth(expiryDate.getMonth() + 2)
        Cookies.setCookie('REMEMBERME', true, {expires: expiryDate})
        this.error = false
        // redirect to calendar view
        this.$router.replace({path: '/'})
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  width: 50%;
  margin: 0 auto;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  background: rgba(#000, 0.3);
  padding: 25px;
  @media screen and (max-width: 900px) {
    width: 75%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
  input, button {
    opacity: 0.9;
    padding: 10px;
    background: rgba(#fff, 0.3);
    color: white;
    border: 1px solid black;
  }
  button {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>