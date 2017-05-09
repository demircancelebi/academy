<template>
  <div class="image-holder">
    <transition name="fade">
      <img v-show="currentSrc === smallSrc" transition="blur" :src="smallSrc"></img>
    </transition>
    <transition name="fade">
      <img v-show="currentSrc === bigSrc" transition="blur" :src="bigSrc"></img>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'BlurryImageLoader',
    data() {
      return {
        currentSrc: null,
      };
    },
    mounted() {
      // const img = new Image();
      // img.onload = () => {
      //   this.imageSrc = this.src;
      // };
      // img.src = this.src;
      const img = new Image();
      // const context = this.$el.getElementsByTagName('canvas')[0].getContext('2d');
      img.onload = () => {
        // context.drawImage(img, 0, 0);
        this.currentSrc = this.smallSrc;
      };
      img.src = this.smallSrc;

      const img2 = new Image();
      img2.onload = () => {
        setTimeout(() => {
          this.currentSrc = this.bigSrc;
        }, 300);
      };
      img2.src = this.bigSrc;
    },
    props: ['bigSrc', 'smallSrc'],
  };
</script>

<style scoped>
  .image-holder {
    position: relative;
  }
  img, canvas, .placeholder {
    width: 100%;
    position: absolute;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity linear .1s 0s;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
