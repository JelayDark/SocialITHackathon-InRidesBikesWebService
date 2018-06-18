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
  padding: 0;
  margin:0;
  width: 20%;
  float: left;
  max-height: 500px;
  overflow-y: auto;

}

.main-wrapper {
  padding: 0;
  margin:0;
  width: 80%;
  float: left;
}

.home-map-block {
  padding: 0;
  margin:0;
}

.clearfix:after {
  content: '';
  display: table;
  clear: both;
}


</style>
