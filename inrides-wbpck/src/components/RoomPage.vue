/* eslint-disable */
<template>
  <div>
    <div class="top-part">
      <MainHeader/>
    </div>

    <div class="room-wrapper">
      <div class="title-wrapper" @click="say">
        <room-title v-bind:titletxt="rideTitle"></room-title>
      </div>
      <p>Start time: {{this.date()}}</p>
      <gmap-map
              :center="{lat:50.439178, lng:30.539135}"
              :zoom="12"
              map-type-id="terrain"
              class="mapa"
      >
        <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
        />
      </gmap-map>
        <chat-window :room="idl"></chat-window>
        <div style="clear: both; margin-bottom: 15px;"></div>
    </div>
  </div>

</template>

<script>
import MainHeader from './MainHeader'
import RoomTitle from './Room/RoomTitle'
import ChatWindow from './Room/ChatWindow'

export default {
  name: "room-page",
  props: ['id'],
  data: function () {
    return {
      idl: this.id,
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      markersWithInfo: [],
      places: [],
      currentPlace: null,
      // socket: io('localhost:3000'),
      token: ''
    }
  },
  mounted() {
      console.log(this.idl)
      this.markers.push({ position: { lat: parseFloat(this.idl.position.lat), lng: parseFloat(this.idl.position.lng) }})
      this.center = {
          lat: parseFloat(this.idl.position.lat),
          lng: parseFloat(this.idl.position.lang)
      };
  },
  computed: {
    rideTitle () {
      return this.idl ? this.idl.rideTitle : false
    }
  },
  methods: {
    say () {
      console.log('wowowowo', this.idl);
    },
    date () {
        const myDate = new Date(this.idl.rideDateTime);
        return myDate.getDate() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getFullYear() + " " + myDate.getHours() + ":" + myDate.getMinutes()
    }
  },
  components: {
    MainHeader,
    RoomTitle,
    ChatWindow
  }
}
</script>

<style lang="scss" scoped>
.room-wrapper {
  margin: 40px auto;
  padding: 40px;
  width: 90%;
  background-color: #fff;
  min-height: 600px;
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
}
.mapa {
    width:60%;
    height: 500px;
    float: right;
}
.mapa::after {
    content: '';
    display: block;
    margin-bottom: 15px;
}
</style>
