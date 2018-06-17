<template>
  <div>
    <Header/>
    <div class="home-map-block">
      <div class="list-wrapper">
        <locs-list/>
      </div>
      <div class="main-wrapper">
        <main-part/>
      </div>
    </div>

  </div>

</template>

<script>
import Header from './Header'
import MainPart from './HomePage/MainPart'
import LocsList from './HomePage/LocsList'

export default {
  name: 'HomePage',
  props: {
  },
  data: () => {
    return {
      cocoa: 'hi',
      items: ['aa', 'dd', 'ff0', 'ffds', 'dsfdf']

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
    MainPart,
    LocsList
  }
}
</script>

<style scoped>
.list-wrapper {
  width: 20%;
  float: left;
  border: 1px solid black;
  max-height: 200px;
  overflow-y: auto;
}
.main-wrapper {
  width: 70%;
  margin-left: 40px;
  float: left;
}


</style>
