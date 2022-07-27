<template>
  <div class="main-page">
    <div class="main-page__content">
      <div class="main-page__title">Добавление товара</div>
      <div class="main-page__add-new-product">
        <formAdd></formAdd>
        <ul class="main-page__product-list">
          <li v-for="(product, index) in $store.state.productList" :key="index">
            <div class="delete__product" @click="deleteProduct(index)">
              <img src="./../../resources/delete.png" alt="" />
            </div>
            <product
              :title="product.title"
              :link="product.link"
              :description="product.description"
              :price="product.price"
            ></product>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import formAdd from "./formAddProduct.vue";
import product from "./product.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home-page",
  components: {
    formAdd,
    product,
  },
  methods: {
    ...mapMutations(["deleteProductCard"]),
    deleteProduct(index) {
      this.deleteProductCard(index);
    },
  },
  computed: {
    ...mapState(["productList"]),
    productCards() {
      return this.productList;
    },
  },
};
</script>
<style lang="scss" scoped>
$margin: 16px;

.main-page {
  width: 100%;
  .main-page__content {
    width: 95%;
    margin: 0 auto;
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
      //   gap: $margin;
      justify-items: stretch;
    }
    li {
      margin-bottom: $margin;
      margin-right: $margin;
      position: relative;
    }
    .delete__product {
      position: absolute;
      right: -20px;
      top: -8px;
    }
  }
}
</style>