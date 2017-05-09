<template>
  <div class="card mb-4">
    <div class="card-block">
      <h5 class="card-title">Subscribe</h5>
      <div class="card-text">Leave your email and do not miss lessons like these</div>
      <hr>
      <div class="form-group">
        <label for="email" class="mb-0"><strong>Email</strong></label>
        <input type="text" class="form-control" placeholder="youremail@gmail.com">
        <small>We'll never send spam :)</small>
      </div>
      <button class="btn btn-success">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      a: 1,
    };
  },
};
</script>

<style scoped>
  .card-block {
    background: rgba(255, 255, 0, 0.1);
  }
</style>
