<template>
  <div class="main-page">
    <div class="main-page__header">
      <div class="main-page__title">Добавление товара</div>
      <div class="main-page__select">
        <selectShort
          :options="options"
          @select="shorting"
          :selected="selected"
        ></selectShort>
      </div>
    </div>
    <div class="main-page__content">
      <div class="main-page__form-add">
        <formAdd></formAdd>
      </div>
      <div class="main-page__product-list">
        <ul>
          <TransitionGroup name="list" tag="ul">
            <li v-for="(product, index) in productCards" :key="index">
              <div
                class="product-list__delete-product"
                @click="deleteProduct(index)"
              >
                <img src="./../../resources/deleteBox.png" alt="" />
              </div>
              <product
                :title="product.title"
                :link="product.link"
                :description="product.description"
                :price="product.price"
              ></product>
            </li>
          </TransitionGroup>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import formAdd from "./formAddProduct.vue";
import product from "./product.vue";
import selectShort from "./v-select.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home-page",
  components: {
    formAdd,
    product,
    selectShort,
  },
  data() {
    return {
      selected: "По умолчанию",
      options: [
        {
          title: "По умолчанию",
          short: 0,
        },
        {
          title: "По возрастанию",
          value: 1,
        },
        {
          title: "По убыванию",
          value: 2,
        },
        {
          title: "По названию",
          value: 3,
        },
      ],
    };
  },
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
    shorting(option) {
      this.selected = option.title;
      switch (option.value) {
        case 0:
          console.log("По умолчанию!");
          break;
        case 1:
          this.shortProductsIncrease();
          break;
        case 2:
          this.shortProductsDescending();
          break;
        case 3:
          this.shortProductsByTitile();
          break;
      }
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
  height: 100%;
  .main-page__header {
    width: 96%;
    margin: 0 auto;
    height: 68px;
    display: flex;
    justify-content: space-between;
    margin-bottom: $margin;
    .main-page__title {
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      margin-top: $margin * 2;
    }
    .main-page__select {
      margin-top: $margin * 2;
    }
  }
  .main-page__content {
    display: flex;
    justify-content: space-between;
    width: 96%;

    margin: 0 auto;
    .main-page__form-add {
      width: 332px;
    }
    .main-page__product-list {
      width: 100vw;
      ul {
        padding: 0;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        .product-list__delete-product {
          background: #ff8484;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: -10px;
          top: -8px;
          img {
            width: 14px;
            height: 16px;
          }
        }
        .list-move,
        .list-enter-active,
        .list-leave-active {
          transition: all 1s ease;
        }
        .list-enter-from,
        .list-leave-to {
          opacity: 0;
          transform: translateX(40px);
        }
        .list-leave-active {
          position: absolute;
        }
        li {
          position: relative;
          margin-left: $margin;
          margin-bottom: $margin;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .main-page__content {
    flex-direction: column;
    justify-content: center;
    .main-page__form-add {
      margin: 0 auto;
      width: 270px;
      margin-bottom: $margin * 1.5;
    }
    .main-page__product-list {
      width: 100%;
    }
  }
}
</style>