<template>
    <div class="post-page">
        <PostList :posts="posts" />
    </div>
</template>
<script>
import PostList from '~/components/posts/PostList.vue';
export default {  
  components: {
    PostList
  },
  computed: {
    posts(){
      return this.$store.state.posts.list;
    }
  }
}
</script>
<style scoped>
.post-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>