<template>
  <div class="sidebar">
    <subscribe></subscribe>
  </div>
</template>

<script>
import Subscribe from '@/components/Subscribe';

export default {
  name: 'Sidebar',
  data() {
    return {
      a: 1,
    };
  },
  components: {
    Subscribe,
  },
};
</script>
