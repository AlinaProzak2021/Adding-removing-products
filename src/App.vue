<template>
  <div id="app">
    <home></home>
  </div>
</template>
<script>
import home from "./components/formAddProduct.vue";
export default {
  name: "App",
  components: {
    home,
  },
};
</script>
<style lang ="scss">
$font-stack: "Source Sans Pro", sans-serif;
#app {
  font-family: $font-stack;
  width: 100%;
  height: 100%;
}
</style>
