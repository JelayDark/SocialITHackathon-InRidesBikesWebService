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
      <div class="add-venue">
        <add-btn/>
      </div>
    </div>
  </div>

</template>

<script>
import MainHeader from './MainHeader'
import MainPart from './HomePage/MainPart'
import LocsList from './HomePage/LocsList'
import AddBtn from './HomePage/AddBtn'

export default {
  name: 'HomePage',
  props: {
  },
  data: () => {
    return {
      items: ['aa', 'dd', 'ff0', 'ffds', 'dsfdf'],
      token: false
    }
  },
  methods: {

  },
  created: () => {
    this.token = localStorage.getItem('token') || false
    console.log('homepage this.token', this.token);
  },
  components: {
    MainHeader,
    MainPart,
    LocsList,
    AddBtn
  }
}
</script>

<style scoped>
.top-part {
}

.add-venue {
  clear: both;
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
