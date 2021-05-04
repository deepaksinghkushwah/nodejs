<template>
    <div>
        <h1>Hello Users</h1>
        <input type="text" v-model="userID"/>
        <button @click="sendUser">Click Here</button>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            userID: 0
        }
    },
    methods: {
        sendUser(){
            this.$router.push('/users/' + this.userID);
        }
    }
}
</script>
