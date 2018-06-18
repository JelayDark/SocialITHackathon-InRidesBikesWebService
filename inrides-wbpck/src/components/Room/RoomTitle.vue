<template>
  <div>
    <input type="text" id="room-name" name="room-name" placeholder="Enter room name" v-if="isInput">
    <h1 v-else>{{titletxt}}</h1>
  </div>
</template>

<script>
export default {
  name: "room-title",
  props: ['titletxt'],
  data: function() {
    return {

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

</style>
