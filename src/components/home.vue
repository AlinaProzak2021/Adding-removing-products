<template>
  <div class="main-page">
    <div class="main-page__title">Добавление товара</div>
    <div class="main-page__add-new-product">
      <formAdd></formAdd>
      <ul class="main-page__product-list">
        <li v-for="(product, index) in $store.state.productList" :key="index">
          <product
            :name="product.name"
            :image="product.image"
            :description="product.description"
            :price="product.price"
          ></product>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import formAdd from "./form-Add.vue";
import product from "./product.vue";
export default {
  name: "Home-page",
  components: {
    formAdd,
    product,
  },
};
</script>
<style lang="scss" scoped>
$margin: 16px;

.main-page {
  width: 100%;

  .main-page__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: $margin;
    margin-left: $margin * 2;
    margin-top: $margin * 2;
  }
  .main-page__add-new-product {
    display: flex;
  }
  ul {
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $margin;
  }
  li {
    margin-bottom: $margin;
    margin-right: $margin;
  }
}
</style>