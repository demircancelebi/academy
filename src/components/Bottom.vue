<template>
  <div class="footer py-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-middle">
            <div class="col-sm-12 mb-5 d-flex justify-content-end">
              <div class="mr-auto align-self-center">
                <img class="footer-logo" :src="logo" :alt="company">
              </div>
              <h5 class="inline-title mb-0 mr-4 align-self-center">{{ text }}</h5>
              <a :href="link" class="btn btn-primary align-self-center">{{ btn }}</a>
            </div>
          </div>
        </div>
        <div class="col" v-for="list in urls">
          <ul class="list-inline">
            <li class="text-left" v-for="url in list"><a :href="url.url">{{ url.name }}</a></li>
          </ul>
        </div>
        <div class="col-sm-12">
          <div class="row align-middle">
            <div class="col-sm-12 mt-5 mb-2  d-flex justify-content-between">
              <div v-once>{{ copyright }}</div>
              <div v-html="extra"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bottom',
    data() {
      const data = {
        logo: 'https://www.marketinf.com/assets/images/logo_light.bd3c6a11.png',
        link: '#',
        btn: 'Start my free trial',
        company: 'Marketinf',
        text: 'Get analytics and insights in to your business!',
        copyright: 'Copyright 2017 Baremetrics, Inc. All rights reserved.',
        extra: 'Want to talk to a human?',
      };
      data.urls = [
        [
          {
            name: 'Open Startups',
            url: '#',
          },
          {
            name: 'Pricing',
            url: '#',
          },
          {
            name: 'Blog',
            url: '#',
          },
          {
            name: 'Wall of Love',
            url: '#',
          },
        ],
        [
          {
            name: 'Academy',
            url: '#',
          },
          {
            name: 'Jobs',
            url: '#',
          },
          {
            name: 'About',
            url: '#',
          },
          {
            name: 'Contact Us',
            url: '#',
          },
        ],
        [
          {
            name: 'Customer Stories',
            url: '#',
          },
          {
            name: 'Help Center',
            url: '#',
          },
          {
            name: 'Log in',
            url: '#',
          },
          {
            name: 'Sign up',
            url: '#',
          },
        ],
        [
          {
            name: 'Developers',
            url: '#',
          },
          {
            name: 'Privacy',
            url: '#',
          },
          {
            name: 'Security',
            url: '#',
          },
          {
            name: 'Terms',
            url: '#',
          },
        ],
      ];
      return data;
    },
  };
</script>

<style scoped>
  * {
    font-weight: 200 !important;
  }
  .footer {
    background: #333;
    color: #fff;
  }
  a, a:hover {
    cursor: pointer;
    color: #fff;
  }
  .inline-title {
    display: inline-block;
  }
  .footer-logo {
    max-width: 300px;
    max-height: 80px;
  }
</style>
