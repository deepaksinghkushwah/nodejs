<template>
  <div class="home-page">
    <div class="intro">
      <h1>Welcome to latest tech news</h1>
    </div>
    <section class="featured-posts">
      <PostPreview 
      id="1"       
      title="Lorem ipsum dolor sit amet"
      thumbnail="/assets/images/tech.jpg"
      previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe, nisi voluptatem tanti aestimaretis. Non quam nostram quidem, inquit Pomponius iocans"
      />

      <PostPreview       
      id="2" 
      title="Lorem ipsum dolor sit amet"
      thumbnail="/assets/images/tech.jpg"
      previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe, nisi voluptatem tanti aestimaretis. Non quam nostram quidem, inquit Pomponius iocans"
      />

      <PostPreview       
      id="3" 
      title="Lorem ipsum dolor sit amet"
      thumbnail="/assets/images/tech.jpg"
      previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe, nisi voluptatem tanti aestimaretis. Non quam nostram quidem, inquit Pomponius iocans"
      />
    </section>
  </div>
</template>
<script>
import PostPreview from '~/components/posts/PostPreview.vue';
export default {
  components: {
    PostPreview
  }
}
</script>
