<template>
    <nuxt-link :to="{path: '/posts/'+id}" class="post-link">
        <article class="post-preview">
          <div class="post-thumb">
            <img src="~/assets/tech.jpg" height="100"/>
          </div>
          <div class="post-preview-content">
              <h3>{{ title }}</h3>
              {{ previewText }}
              </div>
        </article>
      </nuxt-link>
</template>
<script>
export default {
    name: "PostPreview",
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        previewText: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
    }
}
</script>
<style scoped>
.post-link {
    color: black;
    text-decoration: none;
}
.post-preview{
  display: flex;  
  justify-items: start;
  align-items: top;
  justify-content: top;
  border: 1px solid gray;
  margin-bottom: 10px;
  background-color: gray;
  padding: 10px;
  
  
}

.post-preview-content h3{
    font-weight: bold;
    margin: 0px;
    padding: 0px;
}

</style>