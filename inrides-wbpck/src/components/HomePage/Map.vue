/* eslint-disable */
<template>
  <div id="bike-map">
    <!--<div>-->
      <!--<h2>Search and add a start point</h2>-->
      <!--<label>-->
        <!--<gmap-autocomplete-->
                <!--@place_changed="setPlace">-->
        <!--</gmap-autocomplete>-->
        <!--<button @click="addMarker">Add</button>-->
      <!--</label>-->
      <!--<br/>-->

    <!--</div>-->

    <gmap-map
      :center="changeCenter"
      :zoom="changeZoom"
      map-type-id="terrain"
      style="width:100%;  height: 500px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markersWithInfo"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="selectMarker(m)"
      />
    </gmap-map>

      <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content" @click="chooseThis(this.currentItem)">
              <p>{{ modalName }}<br> {{ modalDate }}</p>
          </div>

      </div>

    <!--<h2>Search and add a start point</h2>-->
    <!--<label>-->
      <!--<gmap-autocomplete-->
              <!--@place_changed="setPlace">-->
      <!--</gmap-autocomplete>-->
      <!--<button @click="addMarker">Add</button>-->
    <!--</label>-->

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
          markersWithInfo: [],
          places: [],
          currentPlace: null,
          socket: io('localhost:3000'),
          token: '',
          changeCenter: {lat:50.439178, lng:30.539135},
          changeZoom: 12,
          modalName: '',
          modalDate: '',
          currentItem: ''
      };
  },
  mounted() {
      this.geolocate()
      this.token = localStorage.getItem('token') || ''
      this.getMarkers();
      this.getMarkersWithInfo();
      this.socket.on('newMarker', (data) => {
          this.markers.push({ position: { lat: parseFloat(data.startMarkerCoordinateX), lng: parseFloat(data.startMarkerCoordinateY) }})
      })
  },
  created() {

    // let recaptchaScript = document.createElement('script')
    // const initMap = this.initMap()
    // recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVh_KeFFlOxLQNxJ8SA3qYLgerKX2ZosY&callback=initMap')
    // document.head.appendChild(recaptchaScript)
    // this.check()
  },
  methods: {
      getMarkersWithInfo: function() {
          axios.post('http://localhost:3000/ride/getrides', {
              headers: { // sdf
                  Authorization: 'Bearer ' + this.token
              }
          })
              .then((res) => {
                  for(let marker of res.data) {
                      this.markersWithInfo.push({
                          position: {
                              lat: parseFloat(marker.startMarkerCoordinateX),
                              lng: parseFloat(marker.startMarkerCoordinateY)
                          },
                          rideTitle: marker.rideTitle,
                          rideDateTime: marker.rideDateTime,
                          id: marker._id
                      })
                  }
              })
              .catch((e) => {
                  console.log(`ERROR: ${e}`)
                  alert('Something went wrong! Please try again!')
              })
      },
      getMarkers: function() {
          axios.post('http://localhost:3000/ride/getrides', {
              headers: { // sdf
                  Authorization: 'Bearer ' + this.token
              }
          })
              .then((res) => {
                  console.log(res.data[0])
                  for(let marker of res.data) {
                      this.markers.push({ position: { lat: parseFloat(marker.startMarkerCoordinateX), lng: parseFloat(marker.startMarkerCoordinateY) }})
                  }
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
              // this.places.push(this.currentPlace)
              this.center = marker
              this.currentPlace = null
              const str = qs.stringify({'startMarkerCoordinateX': marker.lat, 'startMarkerCoordinateY': marker.lng})
              axios.post('http://localhost:3000/ride/addride', str, {
                headers: { // sdf
                  Authorization: 'Bearer ' + this.token
                }
              })
                  .then((res) => {
                      console.log(`catch response: ${res.data}`)
                      this.socket.emit('addMarker', {
                          marker: res.data
                      })
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
      },
      makeBeauty (num) {
        if (num < 10) {
            return '0'+num
        } else {
            return num
        }
      },
      selectMarker: function(m) {
          this.changeCenter = m.position;
          this.changeZoom = 14;
          var modal = document.getElementById('myModal');
          this.modalName = m.rideTitle;
          const d = new Date(m.rideDateTime);
          this.modalDate = this.makeBeauty(d.getDate()) + '.' + this.makeBeauty(d.getMonth()) + '.' + this.makeBeauty(d.getFullYear()) + " " + this.makeBeauty(d.getHours()) + ":" + this.makeBeauty(d.getMinutes());
          this.currentItem = m;
          modal.style.display = "block";
      },
      chooseThis (item) {
          console.log(`item chosen: ${item}`)
          this.$router.push({name: 'Room', params: {id: item}})
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

.modal {
    display: none; /* Hidden by default */
    position: absolute; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-left:30%;
    padding-top: 90px; /* Location of the box */
    left: 0;
    top: 0;
    width: 40%; /* Full width */
    height: 18%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>
