/* eslint-disable */
<template>
    <div>
        <div class="top-part">
            <MainHeader/>
        </div>
        <div class="search">
            <h2>Search and add a start point</h2>
            <label>
                <gmap-autocomplete
                    @place_changed="setPlace">
                </gmap-autocomplete>
                <input name="title" placeholder="Title" v-model="rTitle">
                <input name="rideDateTime" placeholder="Ride date time YYYY-MM-DD HH:MM" v-model="rideDateTime">
                <input name="description" placeholder="Description" v-model="description">
                <button @click="addMarker">Add</button>
            </label>
            <br/>
        </div>
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
        </gmap-map></div>
</template>

<script>
import MainHeader from '../MainHeader'
import axios from 'axios'
import qs from 'qs'
import io from 'socket.io-client'

export default {
    name: "add-point",
    components: {
        MainHeader
    },
    data() {
        return {
            // default to Montreal to keep it simple
            // change this to whatever makes sense
            center: {  },
            markers: [],
            markersWithInfo: [],
            places: [],
            currentPlace: null,
            socket: io('localhost:3000'),
            token: '',
            rTitle: '',
            rideDateTime: '',
            description: ''
        };
    },
    mounted() {
        this.geolocate()
        this.token = localStorage.getItem('token') || ''
        this.getMarkers();
        // this.getMarkersWithInfo();
        this.socket.on('newMarker', (data) => {
            this.markers.push({ position: { lat: parseFloat(data.startMarkerCoordinateX), lng: parseFloat(data.startMarkerCoordinateY) }})
        })
    },
    methods: {
        addMarker: function () {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                }
                this.markers.push({position: marker})
                // this.places.push(this.currentPlace)
                this.center = marker
                this.currentPlace = null
                const str = qs.stringify({'startMarkerCoordinateX': marker.lat, 'startMarkerCoordinateY': marker.lng,
                    rideTitle: this.rTitle,  rideDateTime: this.rideDateTime, description: this.description})
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
        setPlace: function (place) {
            this.currentPlace = place;
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

<style scoped>
.search {
    margin-bottom: 15px;
}
</style>
