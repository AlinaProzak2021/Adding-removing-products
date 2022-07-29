<template>
  <div class="main-page">
    <div class="main-page__content">
      <div class="main-page__header">
        <div class="main-page__title">Добавление товара</div>
        <div class="main-page__sort">
          <!-- <selectShort></selectShort> -->
        </div>
      </div>
      <div class="main-page__add-new-product">
        <formAdd></formAdd>
        <ul class="main-page__product-list">
          <li v-for="(product, index) in productCards" :key="index">
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
// import selectShort from "./selectShort.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home-page",
  components: {
    formAdd,
    product,
  },
  // data() {
  //   return {
  //     shorts: [
  //       {
  //         title: "По умолчанию",
  //         short: 0,
  //       },
  //       {
  //         title: "По возрастанию",
  //         value: 1,
  //       },
  //       {
  //         title: "По убыванию",
  //         value: 2,
  //       },
  //       {
  //         title: "По названию",
  //         value: 3,
  //       },
  //     ],
  //     selectedShort: "",
  //     shorts_: [
  //       this.shortProductsIncrease(),
  //       this.shortProductsDescending(),
  //       this.shortProductsByTitile(),
  //     ],
  //   };
  // },
  methods: {
    ...mapMutations(["deleteProductCard", "shortProductsIncrease"]),
    deleteProduct(index) {
      this.deleteProductCard(index);
    },

    shortProductsIncrease() {
      this.productCards.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    shortProductsDescending() {
      this.productCards.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
    shortProductsByTitile() {
      this.productCards.sort((a, b) => (a.title < b.title ? 1 : -1));
    },
    // selectShort(option) {
    //   if (option.value >= 1) {
    //     this.shorts_[option.value];
    //   } else {
    //     console.log("сортировка по умолчанию");
    //   }
    // },
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
    .main-page__header {
      display: flex;
      margin-top: $margin * 2;
      height: 36px;
      margin-bottom: $margin;
      justify-content: space-between;
      .main-page__title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        margin-left: $margin * 2;
      }
      select {
        width: 121.49px;
        height: 100%;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: none;
        color: #b4b4b4;
        outline-color: #6b69ff;
      }
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