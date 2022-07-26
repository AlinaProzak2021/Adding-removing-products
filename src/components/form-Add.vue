<template>
  <div class="add-product">
    <form
      @submit.prevent="addProduct({ name, description, image, price })"
      class="add-product__form"
    >
      <div class="form__input-data">
        <p>Наименование товара</p>
        <input
          type="text"
          class="form__input"
          placeholder="Введите наименование товара"
          v-model="name"
        />
      </div>
      <div class="form__input-data">
        <p>Описание товара</p>
        <textarea
          v-model="description"
          cols="30"
          rows="10"
          class="form__textarea"
          placeholder="Введите описание товара"
        ></textarea>
      </div>
      <div class="form__input-data">
        <p>Ссылка на изображение товара</p>
        <input
          v-model="image"
          type="text"
          class="form__input"
          placeholder="Введите ссылку"
        />
      </div>
      <div class="form__input-data">
        <p>Цена товара</p>
        <input
          v-model="price"
          type="text"
          class="form__input"
          placeholder="Введите цену"
        />
      </div>
      <button class="form__button">Добавить товар</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "form-add-product",
  data() {
    return {
      name: "",
      image: "",
      description: "",
      price: "",
    };
  },
  methods: {
    ...mapMutations(["addProductCard"]),
    addProduct(product) {
      console.log(product);
      this.addProductCard(product);
    },
  },
};
</script>
<style lang="scss" scoped>
$margin: 16px;
.add-product {
  $background: #fffefb;
  .add-product__form {
    width: 332px;
    display: flex;
    flex-direction: column;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    background: $background;
    margin-left: $margin * 2;
    margin-right: $margin;
  }

  .form__input-data {
    margin: 0 auto;
    margin-bottom: $margin;

    p {
      margin-top: 0;
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485e;
      margin-bottom: 4px;
    }

    .form__input {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      width: 284px;
      height: 36px;
      border: none;
      background: $background;
    }
    input,
    textarea {
      outline: none;
      padding-left: 16px;
      padding-top: 10px;
    }
    ::placeholder {
      font-size: 12px;
      color: #b4b4b4;
    }

    .form__textarea {
      width: 284px;
      height: 108px;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: none;
      resize: none;
    }
  }
  .form__button {
    width: 284px;
    height: 36px;
    background: #eeeeee;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #b4b4b4;
    border: none;
    margin: 0 auto;
    margin-top: $margin * 1.5;
    margin-bottom: $margin * 1.5;
    font-family: "Inter", sans-serif;
  }
}
</style>