<template>
  <div class="categories-bar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item" v-for="link in links">
          <a class="nav-link" :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesBar',
  data() {
    return {
      links: [
        {
          name: 'Home',
          url: '/',
        },
        {
          name: 'Marketing & Success',
          url: '/c/marketing-success',
        },
        {
          name: 'Metrics 101',
          url: '/c/metrics-101',
        },
        {
          name: 'Running a Business',
          url: '/c/running-a-business',
        },
        {
          name: 'Starting a Business',
          url: '/c/starting-a-business',
        },
        {
          name: 'Startup Tips',
          url: '/c/startup-tips',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .categories-bar {
    background: rgba(0,0,0,0.07);
  }
  .nav li a{
    height: 50px;
    line-height: 36px;
  }
</style>
