<template>
  <div id="bike-map">
    <div>
      <h2>Search and add a start point</h2>
      <label>
        <gmap-autocomplete
                @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="{lat:50.439178, lng:30.539135}"
      :zoom="7"
      map-type-id="terrain"
      style="width:100%;  height: 400px;"
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
  </div>
</template>

<script>
export default {
  name: 'map',
  data() {
      return {
          // default to Montreal to keep it simple
          // change this to whatever makes sense
          center: { lat: 45.508, lng: -73.587 },
          markers: [],
          places: [],
          currentPlace: null
      };
  },
  mounted() {
      this.geolocate();
  },
  created() {
    // let recaptchaScript = document.createElement('script')
    // const initMap = this.initMap()
    // recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVh_KeFFlOxLQNxJ8SA3qYLgerKX2ZosY&callback=initMap')
    // document.head.appendChild(recaptchaScript)
    // this.check()
  },
  methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
          this.currentPlace = place;
      },
      addMarker() {
          if (this.currentPlace) {
              const marker = {
                  lat: this.currentPlace.geometry.location.lat(),
                  lng: this.currentPlace.geometry.location.lng()
              };
              this.markers.push({ position: marker });
              this.places.push(this.currentPlace);
              this.center = marker;
              this.currentPlace = null;
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
  height: 400px;
  margin: 0 auto;
  background-color: red;
}
</style>
