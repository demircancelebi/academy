<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a :href="category.link">{{ category.name }}</a></li>
    <li class="breadcrumb-item active">{{ title }}</li>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: ['title', 'category'],
  data() {
    return {
      a: 1,
    };
  },
};
</script>
