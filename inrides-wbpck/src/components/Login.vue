<template>
  <form>
    <h1>login</h1>
    <div class="login-single-block">
      <label for="login">
        <input type="text" id="login" name="login" v-model="username">
      </label>
    </div>
    <div>
      <label for="pass">
        <input type="password" id="pass" name="pass" v-model="userpass">
      </label>
    </div>

    <button type="submit" @click.prevent="sendData">Log In</button>
    <p>
      response:
      {{ response }}
    </p>
  </form>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'loginForm',
  data: () => {
    return {
      username: '',
      userpass: '',
      response: ''
    }
  },
  methods: {
    sendData () {
      const str = qs.stringify({'username': this.username, 'password': this.userpass})
      console.log(`uName: ${this.username}`)
      console.log(`uPass: ${this.userpass}`)
      axios.post('http://192.168.0.76:3000/auth/login', str)
        .then((res) => {
          this.response = res
        })
        .catch((e) => {
          this.response = e
        })
    }
  }
}
</script>

<style scoped>

</style>
