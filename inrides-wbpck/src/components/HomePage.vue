<template>
  <div>
    <Header/>
    <div class="home-map-block">
      <ul>
        <li v-for="item in items">
          {{ item }}
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import Header from './Header'

export default {
  name: 'HomePage',
  props: {
  },
  data: () => {
    return {
      cocoa: 'hi',
      items: ['aa', 'dd']

    }
  },
  methods: {

  },
  created: () => {
    console.log('created')
    console.log(`cocoa: ${this.cocoa}`)
    console.log(`items: ${this.items}`)
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
