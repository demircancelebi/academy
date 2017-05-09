<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img :src="logo" alt="">
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul class="navbar-nav">
          <li class="nav-item" :class="{ active: $route.path === link.url }" v-for="link in links">
            <a class="nav-link" :href="link.url">{{ link.name }} <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        links: [
          {
            name: 'Admin',
            url: '/admin',
          },
        ],
        logo: 'https://baremetrics.imgix.net/site/logo.svg',
        // logo: 'https://www.marketinf.com/assets/images/logo_light.bd3c6a11.png',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navbar {
    position: relative;
    z-index: 2;
    top: 64px;
    background: transparent;
    background: rgba(0,0,0,0.4);
  }
  .navbar-brand img {
    max-width: 250px;
    max-height: 40px;
  }
  a {
    color: #eee !important;
  }
  a.active, .active a {
    color: #fff !important;
  }
  ul {
    float: right;
    list-style: none;
    li {
      display: inline-block;
    }
  }
</style>
