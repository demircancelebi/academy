<template>
  <div class="card card-floating">
    <a class="card-img-top" :href="postlink">
      <img class="img-fluid" :src="post.urlToImage" :alt="post.title">
    </a>
    <div class="card-block">
      <h4 class="card-title">{{ post.title }}</h4>
      <p class="card-text">{{ post.summary }}</p>
      <a :href="postlink" class="btn btn-primary">Go to lesson</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePostCard',
  props: ['post'],
  computed: {
    postlink() {
      return `/p/post-${this.post.id}`;
    },
  },
};
</script>
