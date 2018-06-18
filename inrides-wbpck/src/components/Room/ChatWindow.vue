/* eslint-disable */
<template>
    <div style="width: 40%; height: 500px;">
        <!--<div class="users-list" style="float: left; width: 30%; height: 500px;">
            <ul style="list-style-type: none;">
                <li >user1</li>
                <li >GMds</li>
                <li >Name</li>
            </ul>
        </div>
        <div class="msg-list" style="float: right; width: 70%; height: 500px; background-color: rgba(156,148,143,0.26)">
            <ul style="list-style-type: none;">
                <li>msg bla</li>
                <li>gfgh</li>
                <li>YA CHAT I YA V PROETKE</li>
            </ul>
        </div>
        <textarea class="msg-input" PLACEHOLDER="msg" ></textarea>-->
        <img src="../../assets/chat.png" style="width: 100%; height: 100%;">
    </div>
</template>

<script>
import io from 'socket.io-client'

export default {
    name: "chat-window",
    props: ["room"],
    data() {
        return {
            users: [],
            socket: io('localhost:3000'),
            channel: this.room,
            //  [{a: 1}, {a: 2}]
            // clients:
        }
    },
    mounted() {
        this.socket.on('connect', function() {
            this.socket.emit('room', this.channel)
        })
        this.socket.on('message', function(data) {
            console.log('Incoming message:', data);
        });
    },
    methods: {
        /*getClients: function() {
            return io.sockets.clients('room')
        }*/
    }
}
</script>

<style scoped>

</style>
