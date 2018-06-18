<template>
  <div>
    <input class="room-name" type="text" id="room-name" name="room-name" placeholder="Enter room name" v-if="isInput">
    <h1 class="room-name" v-else>{{titletxt}}</h1>
  </div>
</template>

<script>
export default {
  name: "room-title",
  props: ['titletxt'],
  data: function() {
    return {
      roomName: ''
    }
  },
  computed: {
    isInput: function () {
      return this.titletxt ? false : true
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: bolder;
  }
  .room-name {
    height: 60px;
    line-height: 60px;
    font-size: 35px;
    font-weight: bold;
    padding-left: 20px;
  }

</style>
