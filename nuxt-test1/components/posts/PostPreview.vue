<template>
  <div class="row row-cols-3 align-items-center">
    <div
      class="col"
      v-for="post in posts"
      :key="post.id"
      :to="{ path: '/posts/' + post.id }"
    >
      <div class="card">
        <img
          src="~/assets/images/tech.jpg"
          class="card-img-top"
          :alt="post.title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
          <nuxt-link :to="{ path: '/posts/' + post.id }" class="btn btn-primary"
            >Goto Post</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostPreview",
  props: {
    posts: {
      id: { type: Number, require: true },
      title: { type: String, require: true },
      previewText: { type: String, require: true },
      content: { type: String, require: true },
      thumbnail: { type: String, require: true },
    },
  },
};
</script>
