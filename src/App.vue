<template>
  <div id="app">
    <formAddProduct></formAddProduct>
  </div>
</template>

<script>
 import formAddProduct from './components/form-Add.vue'
export default {
  name: "App",
  components: {
    formAddProduct
  },
};
</script>

<style lang ="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
