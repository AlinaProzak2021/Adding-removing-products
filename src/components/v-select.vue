<template>
  <div class="v-select">
    <div class="select__container">
      <p class="selected" @click="areOptionsVisible = !areOptionsVisible">
        {{ selected }}
      </p>
      <div class="arrow"></div>
    </div>

    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.short"
        @click="selectOption(option)"
      >
        {{ option.title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "select-short",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "По умолчанию";
      },
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-select {
  width: 121.49px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  cursor: pointer;
  .select__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow {
      width: 4px;
      height: 4px;
      border-top: 1px solid #b4b4b4;
      border-right: 1px solid #b4b4b4;
      transform: rotate(135deg);
      margin-left: 5px;
    }
  }
  .options {
    position: absolute;
    top: 70px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    width: 121.49px;
    z-index: 100;
    text-align: center;
    p:hover {
      background: #8a2be2;
      color: white;
      transition-duration: 0.7s;
    }
  }
}
</style>