<template>

  <div>
    <div class="top-part">
      <MainHeader/>
    </div>

    <div class="room-wrapper">
      <div class="title-wrapper" @click="say">
        <room-title v-bind:titletxt="idl"></room-title>
      </div>
    </div>
  </div>

</template>

<script>
import MainHeader from './MainHeader'
import RoomTitle from './Room/RoomTitle'

export default {
  name: "room-page",
  props: ['id'],
  data: function () {
    return {
      idl: this.id
    }
  },
  methods: {
    say () {
      console.log('wowowowo', this.idl);
    }
  },
  components: {
    MainHeader,
    RoomTitle
  }
}
</script>

<style lang="scss" scoped>
.room-wrapper {
  margin: 40px auto;
  padding: 40px;
  width: 90%;
  background-color: #fff;
  min-height: 600px;
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
}
</style>
