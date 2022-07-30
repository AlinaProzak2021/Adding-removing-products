<template>
  <div class="select-short">
    <p class="selected" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
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
p {
  margin: 0;
  padding-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  width: 100%;
}
.select-short {
  width: 121.49px;
  font-size: 12px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
    z-index: 1000;
}
.selected {
  position: absolute;
  top: 10px;
  z-index: 1000;
}
.options {
  position: absolute;
  top: 30px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  p:hover {
    background: #8a2be2;
    color: white;
  }
}
</style>