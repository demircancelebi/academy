<template>
  <div class="mb-4">
    <div class="">
      <h4 class="card-title">Similar Posts</h4>
      <div class="row">
        <div class="col-md-6" v-for="post in posts">
          <single-post-card :post="post"></single-post-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SinglePostCard from '@/components/SinglePostCard';

export default {
  name: 'SimilarPosts',
  props: ['posts'],
  components: {
    SinglePostCard,
  },
};
</script>
