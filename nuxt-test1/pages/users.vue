<template>
    <div>        
        <input type="text" v-model="userID"/>
        <button @click="sendUser">Click Here</button>
        <nuxt-child/>
    </div>
</template>

<script>
export default {
    layout: 'users',
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
