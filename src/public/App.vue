<template>
  <div class="container">
    <Card />

    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,
  },
};
</script>
