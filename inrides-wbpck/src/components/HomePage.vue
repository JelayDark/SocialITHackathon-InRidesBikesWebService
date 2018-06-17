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
      items: ['aa', 'dd', 'ff0', 'ffds', 'dsfdf'],
      isLogged: false

    }
  },
  methods: {

  },
  created: () => {
    const token = localStorage.getItem('token')
    if (token) {
      this.isLogged = true
    } else {
      this.isLogged = false
      // window.location.href = '/login';
    }
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
  float: right;
}

.home-map-block {
  padding: 40px;
}

.clearfix:after {
  content: '';
  display: table;
  clear: both;
}


</style>
