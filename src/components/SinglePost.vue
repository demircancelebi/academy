<template>
  <div class="home">
    <div class="top-area">
      <blurry-image-loader v-if="bigSrc" :big-src="bigSrc" :small-src="smallSrc"></blurry-image-loader>
    </div>
    <categories-bar></categories-bar>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12">
          <breadcrumbs :title="post.title" :category="post.meta.category"></breadcrumbs>
        </div>
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-block">
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-text" v-for="i in [1,2,3,4]">{{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }} {{ post.description }}</p>
            </div>
          </div>
          <similar-posts :posts="post.meta.similar"></similar-posts>
          <subscribe></subscribe>
        </div>
        <div class="col-md-4">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesBar from '@/components/CategoriesBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlurryImageLoader from '@/components/BlurryImageLoader';
import Sidebar from '@/components/Sidebar';
import Subscribe from '@/components/Subscribe';
import SimilarPosts from '@/components/SimilarPosts';
import axios from 'axios';

export default {
  name: 'SinglePost',
  created() {
    this.getPost();
    this.getSimilar();
  },
  data: () => ({
    topStyle: "background-image: url('https://cdn-images-1.medium.com/max/1000/1*3wf-wPuEqqKoRePCGo7Vrg.jpeg')",
    post: {
      meta: {
        category: {
          name: 'Marketing & Success',
          link: '/c/marketing-success',
        },
        similar: [],
        urlToImage: '',
      },
      image: 'https://cdn-images-1.medium.com/max/1000/1*3wf-wPuEqqKoRePCGo7Vrg.jpeg',
    },
  }),
  methods: {
    getPost() {
      axios.get('/articles?source=recode').then((response) => {
        const p = response.data.articles[parseInt(this.$route.params.id, 10)];
        this.$set(this.post, 'title', p.title);
        this.$set(this.post, 'description', p.description);
        this.$set(this.post, 'urlToImage', p.urlToImage);
      });
    },
    getSimilar() {
      axios.get('/articles?source=recode').then((response) => {
        const articles = response.data.articles.map((a, i) => {
          response.data.articles[i].id = i;
          return a;
        });

        const rnd = Math.floor(Math.random() * (articles.length - 2));
        const similar = [articles[rnd], articles[rnd + 1]];
        this.post.meta.similar = similar;
        // this.$set(this.post.meta, 'similar', similar);
      });
    },
  },
  computed: {
    topStyle() {
      return 'background: url("https://cdn-images-1.medium.com/max/1000/1*3wf-wPuEqqKoRePCGo7Vrg.jpeg")';
    },
    bigSrc() {
      return this.post.urlToImage;
      // return 'https://marketinf.imgix.net/ureticiden-al/media/58ea61f1ef7c0c1900ee0218/3SVoSpUbtKum8sI00q48mce8yYw8EGoM-1491755505060/k%C3%B6y%20resmi.jpg?&q=60';
    },
    smallSrc() {
      return this.post.urlToImage;
      // return this.post.urlToImage;
      // return 'https://marketinf.imgix.net/ureticiden-al/media/58ea61f1ef7c0c1900ee0218/3SVoSpUbtKum8sI00q48mce8yYw8EGoM-1491755505060/k%C3%B6y%20resmi.jpg?&q=60&blur=350';
    },
  },
  components: {
    CategoriesBar,
    Breadcrumbs,
    BlurryImageLoader,
    Sidebar,
    Subscribe,
    SimilarPosts,
  },
};
</script>

<style scoped>
  .top-area {
    background: #333;
    color: #fff;
    position: relative;
    z-index: 1;
    height: 500px;
    overflow: hidden;
  }
  .top-area img {
    display: inline-block;
    max-width: 500px;
    position: relative;
    height: 500px;
    vertical-align: middle;
    transform: translatex(-50%);
  }
</style>
