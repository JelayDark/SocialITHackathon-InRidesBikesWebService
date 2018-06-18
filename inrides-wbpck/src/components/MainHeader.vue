<template>
    <header>
      <div class="btns-wrapper">
        <a class="btn" @click="goProfile"><span>Profile</span><em></em></a>
      </div>
      <img src="../assets/logo.png" alt="logo" @click="goHome">
    </header>
</template>

<script>

export default {
  name: 'MainHeader',
  data: () => {
    return {
      token: '',
      needSign: false
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },

    goProfile () {
      this.$router.push('/profile')
    }
  },
  created: () => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  img {
    margin: 0 auto;
    height: 80px;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
      transition: all .5s ease-in-out;
    }
  }
  .btns-wrapper {
    position: relative;
  }
  .btn {
    cursor: pointer;
    background-color: #000;
    width: 200px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    left: 120px;
    top: 40px;
    transform: translate(-50%, -50%);
    z-index: 0;
    box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.34);
    span {
      color: #fff;
      display: block;
      padding-left: 35px;
      text-transform: uppercase;
      font: bold 18px/50px Arial;
      transform: scaleX(0.6);
      letter-spacing: 3px;
      transform-origin: center left;
      transition: color 0.3s ease;
      position: relative;
      z-index: 1;
    }
    em {
      position: absolute;
      height: 1px;
      background: #fff;
      width: 30%;
      right: 23px;
      top: 50%;
      transform: scaleX(0.25);
      transform-origin: center right;
      transition: all 0.3s ease;
      z-index: 1;
    }
    &:before, &:after {
      content: '';
      background: #fff;
      height: 50%;
      width: 0;
      position: absolute;
      transition: .3s cubic-bezier(.785,.135,.15,.86);
    }
    &:before {
      top: 0;
      left: 0;
      right: auto;
    }
    &:after {
      bottom: 0;
      right: 0;
      left: auto;
    }
    &:hover {
      &:before {
        width: 100%;
        right: 0;
        left: auto;
      }
      &:after {
        width: 100%;
        left: 0;
        right: auto;
      }
      span {
        color: #000;
      }
      em {
        background: #000;
        transform: scaleX(1);
      }
    }
  }
}
</style>
