<template>

  <div>
    <div class="top-part">
      <MainHeader/>
    </div>

    <div class="room-wrapper">

    </div>
  </div>

</template>

<script>
import MainHeader from './MainHeader'
export default {
  name: "room-page",
  components: {
    MainHeader
  }
}
</script>

<style lang="scss" scoped>
.room-wrapper {
  margin: 40px auto;
  width: 90%;
  background-color: #fff;
  min-height: 600px;
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
}
</style>
