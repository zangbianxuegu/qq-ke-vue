<template>
  <div class="back-icon">
    <i
      class="iconfont icon-arrow-left"
      v-show="backIconShow"
      @click="goBack"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'HeaderBackIcon',
  props: {
    backIconShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.back-icon {
  display: flex;
  width: 0.44rem;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
  color: #000;
}
</style>
