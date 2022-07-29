<template>
  <div class="add-product">
    <form
      class="add-product__form"
      @submit.prevent="addProduct({ title, description, link, price })"
    >
      <div class="form__data">
        <div class="form__required">
          <div class="form__title">Наименование товара</div>
          <img src="./../../resources/circle.png" alt="" />
        </div>
        <input
          v-model="title"
          type="text"
          class="form__input"
          placeholder="Введите наименование товара"
          @blur="titleBlured = true"
          :class="{ form__input__error: titleBlured && isEmptyTitle }"
        />
        <span v-if="titleBlured && isEmptyTitle">Это поле обязательно!</span>
      </div>

      <div class="form__data">
        <div class="form__title">Описание товара</div>
        <textarea
          v-model="description"
          cols="30"
          rows="10"
          class="form__texarea"
          placeholder="Введите описание товара"
        ></textarea>
      </div>
      <div class="form__data">
        <div class="form__required">
          <div class="form__title">Ссылка на изображение товара</div>
          <img src="./../../resources/circle.png" alt="" />
        </div>
        <input
          v-model="link"
          type="text"
          class="form__input"
          placeholder="Введите ссылку"
          @blur="linkBlured = true"
          :class="{ form__input__error: linkBlured && isEmptyLink }"
        />
        <span v-if="linkBlured && isEmptyLink">Это поле обязательно!</span>
      </div>
      <div class="form__data">
        <div class="form__required">
          <div class="form__title">Цена товара</div>
          <img src="./../../resources/circle.png" alt="" />
        </div>
        <input
          v-model="price"
          type="number"
          class="form__input"
          placeholder="Введите цену"
          @blur="priceBlured = true"
          :class="{ form__input__error: priceBlured && isEmptyPrice }"
        />
        <span v-if="priceBlured && isEmptyPrice">Это поле обязательно!</span>
      </div>
      <button
        :disabled="isEmptyForm"
        :class="{ form__button__allowed: isEmptyForm === false }"
        class="form__button"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "form-add-product",
  data() {
    return {
      title: "",
      titleBlured: false,
      description: "",
      link: "",
      linkBlured: false,
      price: "",
      priceBlured: false,
    };
  },
  methods: {
    ...mapMutations(["addProductCard"]),
    addProduct(product) {
      this.addProductCard(product);
      this.titleBlured = false;
      this.linkBlured = false;
      this.priceBlured = false;
      this.title = "";
      (this.price = ""), (this.description = ""), (this.link = "");
    },
  },
  computed: {
    isEmptyTitle() {
      return this.title == "";
    },
    isEmptyLink() {
      return this.link == "";
    },
    isEmptyPrice() {
      return this.price == "";
    },
    isEmptyForm() {
      return (this.price && this.link && this.title) == "";
    },
  },
};
</script>
<style lang="scss" scoped>
$margin: 16px;
$background: #fffefb;
$width: 284px;
.add-product {
  .add-product__form {
    width: 332px;
    margin-right: $margin;
    background: $background;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    .form__data:first-child {
      margin-top: $margin * 1.5;
    }
    .form__data {
      display: flex;
      max-width: $width;
      margin: 0 auto;
      flex-direction: column;
    }
    .form__required {
      display: flex;
      img {
        width: 4px;
        height: 4px;
      }
    }
    .form__title {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485e;
      margin-bottom: $margin * 0.25;
    }
    .form__input {
      background: $background;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      width: $width;
      height: 36px;
      border: none;
      margin-bottom: $margin;
    }
    input,
    textarea {
      font-size: 12px;
      line-height: 15px;
      padding-left: 16px;
    }
    input:focus,
    textarea:focus {
      outline-color: #6b69ff;
    }
    textarea {
      resize: none;
      border: none;
      padding-top: 10px;
    }
    ::placeholder {
      color: #b4b4b4;
    }
    .form__texarea {
      width: $width;
      height: 108px;
      background: $background;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      margin-bottom: $margin;
    }
    span {
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      letter-spacing: -0.02em;
      width: 100%;
      color: #ff8484;
    }
    .form__input__error {
      margin-bottom: $margin * 0.25;
      border: 1px solid #ff8484;
    }
    .form__button {
      background: #eeeeee;
      border-radius: 10px;
      width: $width;
      margin: 0 auto;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #b4b4b4;
      height: 36px;
      border: none;
      margin-bottom: $margin * 1.5;
    }
    .form__button__allowed {
      background: #7bae73;
      color: #ffffff;
    }
  }
}
</style>