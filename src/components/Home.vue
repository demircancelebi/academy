<template>
  <div class="home">
    <div class="top-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center mt-5">{{ h1 }}</h1>
            <h2 class="text-center ">{{ h2 }}</h2>
            <form class="form-inline my-4 justify-content-center">
              <input class="form-control form-control-lg mr-sm-2" type="text" :placeholder="placeholder">
              <button class="btn btn-success btn-lg my-2 my-sm-0" type="submit">{{ btn }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <categories-bar></categories-bar>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-4" v-for="post in posts">
          <single-post-card :post="post"></single-post-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesBar from '@/components/CategoriesBar';
import SinglePostCard from '@/components/SinglePostCard';
import axios from 'axios';

export default {
  name: 'home',
  created() {
    axios.get('/articles?source=recode').then((response) => {
      this.posts = response.data.articles.map((a, i) => {
        response.data.articles[i].id = i;
        return a;
      });
    });
  },
  data() {
    const data = {
      h1: 'Business Academy',
      h2: 'Learn how to start, build and grow your business',
      placeholder: 'Email address',
      btn: 'Send Me New Lessons',
      posts: [],
    };

    return data;
  },
  components: {
    CategoriesBar,
    SinglePostCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-area {
  background: #0275d8;
  color: #fff;
  padding-top: 56px;
  height: 400px;
}
input {
  width: 500px !important;
}
h1, h2 {
  font-weight: normal;
}
h1 {
  font-size: 52px;
  font-weight: 600;
}
h2 {
  font-size: 24px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
