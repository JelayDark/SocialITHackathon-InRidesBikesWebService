<template>
  <ul class="list-of-points">
    <li v-for="item in items" @click="chooseThis(item)">
      {{ item.rideTitle }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'locs-list',
  data: () => {
    return {
      items: []
    }
  },mounted() {
        this.getItems();
        console.log(this.items);
    },
  methods: {

      getItems: function() {
          axios.post('http://localhost:3000/ride/getrides', {
              headers: {
                  Authorization: 'Bearer ' + this.token
              }
          })
              .then((res) => {
                  for(let marker of res.data) {
                      this.items.push({
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
      chooseThis (item) {
        console.log(`item chosen: ${item}`)
        this.$router.push({name: 'Room', params: {id: item}})
      }
  },
  created: () => {
    console.log('check for items')
  }
}
</script>

<style lang="scss" scoped>
.list-of-points {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 490px;
  padding-bottom: 6px;
  border-bottom: 3px solid darkgrey;
  li {
    display: block;
    margin-bottom: 1px;
    padding: 8px 8px 8px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    background-color: #CCCCCC;
    font-family: 'Lato', sans-serif;
    &:hover {
      background-color: #664a93;
      cursor: pointer;
    }
  }
}
</style>
