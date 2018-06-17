<template>
  <div>
    <div class="top-part">
      <MainHeader/>
    </div>
    <div class="home-map-block clearfix">
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
import MainHeader from './MainHeader'
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
    MainHeader,
    MainPart,
    LocsList
  }
}
</script>

<style scoped>
.top-part {
  margin-bottom: 40px;
}

.list-wrapper {
  width: 20%;
  float: left;
  border: 1px solid black;
  max-height: 500px;
  overflow-y: auto;
  margin-top: 105px;
}

.main-wrapper {
  width: 70%;
  margin-left: 40px;
  float: left;
}

.home-map-block {

}

.clearfix:after {
  content: '';
  display: table;
  clear: both;
}


</style>
