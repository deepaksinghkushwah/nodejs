<template>
  <div class="home-page">
    <div class="intro">
      <h1>Welcome to latest tech news</h1>
    </div>
    <section class="featured-posts">
      <PostPreview :posts="posts" />
    </section>
  </div>
</template>
<script>
import PostPreview from '~/components/posts/PostPreview.vue';
export default {  
  components: {
    PostPreview
  },
  computed: {
    posts(){
      return this.$store.state.posts.list;
    }
  }
}
</script>
