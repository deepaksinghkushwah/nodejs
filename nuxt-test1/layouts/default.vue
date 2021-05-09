<template>
  <div class="container mainDiv">
    <Header/>
    <Nuxt />
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import Header from '~/components/navigation/Header.vue';
export default{
  components: {
    Header,
    }
}
</script>

<style scoped>

</style>