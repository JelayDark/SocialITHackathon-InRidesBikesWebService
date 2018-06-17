<template>
  <div>
    <Header/>
    <div class="home-map-block">
      <ul>
        <li v-for="item in items">
          {{ item }}
        </li>
      </ul>
      <main-part/>
    </div>

  </div>

</template>

<script>
import Header from './Header'
import MainPart from './HomePage/MainPart'

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
    Header,
    MainPart
  }
}
</script>

<style scoped>

</style>
