<template>
<div>
  <textarea class="room-desc" name="room-desc" id="room-desc" cols="30" rows="10" v-if="isInput">My best trip...</textarea>
  <p v-else>
    {{description}}
  </p>
</div>
</template>

<script>
export default {
  name: "description",
  props: ['description'],

  computed: {
    isInput: function () {
      return this.description ? false : true
    }
  }
}
</script>

<style scoped>

</style>
