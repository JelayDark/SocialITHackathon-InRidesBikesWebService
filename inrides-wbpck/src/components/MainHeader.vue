<template>
    <header>
      <img src="../assets/logo.png" alt="logo">
    </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  img {
    margin: 0 auto;
    height: 60px;
  }
}
</style>
