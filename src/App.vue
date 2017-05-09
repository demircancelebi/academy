<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Bottom from '@/components/Bottom';

export default {
  name: 'app',
  components: {
    Navbar,
    Bottom,
  },
};
</script>

<style>
body {
  margin-top: -64px !important;
}
a, .btn {
  cursor: pointer;
}
.card-floating {
  position: relative;
  top: 0;
  -webkit-transition: all 0.2s; /* Safari */
  transition: all 0.2s;
}
.card {
  border: none !important;
  box-shadow: 0 1px 5px rgba(0,0,0,0.12);
}
.card-floating:hover {
  top: -1px;
  box-shadow: 0 5px 9px rgba(0,0,0,0.08);
}
.card-img-top {
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "San Francisco", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: #2c3e50;
  background: #f7f7f7;
}
</style>
