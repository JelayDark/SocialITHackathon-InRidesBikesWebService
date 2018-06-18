/* eslint-disable */
<template>
  <div id="bike-map">
    <!--<div>
      <br/>

    </div>!-->

    <gmap-map
      :center="{lat:50.439178, lng:30.539135}"
      :zoom="12"
      map-type-id="terrain"
      style="width:100%;  height: 500px;"
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
    <h2>Search and add a start point</h2>
    <label>
      <gmap-autocomplete
              @place_changed="setPlace">
      </gmap-autocomplete>
      <button @click="addMarker">Add</button>
    </label>

  </div>
</template>

<script>
import io from 'socket.io-client'
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'map',
  data() {
      return {
          // default to Montreal to keep it simple
          // change this to whatever makes sense
          center: { lat: 45.508, lng: -73.587 },
          markers: [],
          places: [],
          currentPlace: null,
          socket: io('localhost:3000'),
          token: ''
      };
  },
  mounted() {
      this.geolocate();
      this.socket.on('newMarker', function () {
          this.markers.push(data);
      });
      this.token = localStorage.getItem('token') || '';
  },
  created() {

    // let recaptchaScript = document.createElement('script')
    // const initMap = this.initMap()
    // recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVh_KeFFlOxLQNxJ8SA3qYLgerKX2ZosY&callback=initMap')
    // document.head.appendChild(recaptchaScript)
    // this.check()
  },
  methods: {
      getMarkers: function() {
          axios.post('http://localhost:3000/ride/getrides')
              .then((res) => {
                  console.log(`catch response: ${res.data}`)
              })
              .catch((e) => {
                  console.log(`ERROR: ${e}`)
                  alert('Something went wrong! Please try again!')
              })
      },
      // receives a place object via the autocomplete component
      setPlace: function(place) {
          this.currentPlace = place;
      },
      addMarker: function() {
          if (this.currentPlace) {
              const marker = {
                  lat: this.currentPlace.geometry.location.lat(),
                  lng: this.currentPlace.geometry.location.lng()
              }
              this.markers.push({ position: marker })
              this.places.push(this.currentPlace)
              this.center = marker
              this.currentPlace = null
              const str = qs.stringify({'startMarkerCoordinateX': marker.lat, 'startMarkerCoordinateY': marker.lng})
              console.log(`ya token: ${this.token}`)
              axios.post('http://localhost:3000/ride/addride', str, {
                headers: {
                  Authorization: 'Bearer '+JSON.stringify(this.token)
                }
              })
                  .then((res) => {
                      console.log(`catch response: ${res.data}`)
                  })
                  .catch((e) => {
                      console.log(`ERROR: ${e}`)
                      alert('Something went wrong! Please try again!')
                  })

          }
      },
      geolocate: function() {
          navigator.geolocation.getCurrentPosition(position => {
              this.center = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };
          });
      }
  }
}
</script>

<style lang="scss" scoped>
.map-wrapper {
  width: 80%;
  height: 500px;
  margin: 0 auto;
  padding:0;
  background-color: red;
}
</style>
