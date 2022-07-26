<template>
  <div class="product">
    <div class="product__image">
      <img :src="image" alt="изображение товара" />
    </div>
    <div class="product__name">{{ name }}</div>
    <div class="product__description">{{ description }}</div>
    <div class="product__price">{{ price }}</div>
  </div>
</template>
<script>
export default {
  name: "product-item",
  props: ["name", "image", "description", "price"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$margin: 16px;
.product {
  width: 100%;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  color: #3f3f3f;

  .product__image {
    width: 100%;
    height: 200px;
    margin-bottom: $margin;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product__name {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3f3f3f;
    margin-bottom: $margin;
    margin-left: $margin;
  }
  .product__description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    max-width: 300px;
    margin-left: $margin;
    margin-bottom: $margin * 2;
  }
  .product__price {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-left: $margin;
    padding-bottom: 24px;
  }
}
</style>