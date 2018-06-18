/* eslint-disable */
<template>
    <div style="width: 40%;">
        <div class="users-list" style="float: left; width: 30%;">
            <ul style="list-style-type: none;">
                <li >user1</li>
                <li >GMds</li>
                <li >Name</li>
            </ul>
        </div>
        <div class="msg-list" style="float: right; width: 70%;">
            <ul style="list-style-type: none;">
                <li>msg bla</li>
                <li>gfgh</li>
                <li>f645 4563</li>
            </ul>
        </div>
        <textarea class="msg-input"></textarea>
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
