<template>
  <div class="container mainDiv">
    <Header/>
    <Nuxt />
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import Header from '~/components/Header.vue';
export default{
  components: {
    Header,
    }
}
</script>

