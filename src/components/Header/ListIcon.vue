<template>
  <div class="list-icon">
    <router-link to="list">
      <i class="iconfont icon-cc-list" v-show="listIconShow"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderListIcon',
  props: {
    listIconShow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-icon {
  display: flex;
  width: 0.44rem;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
  color: #000;

  .iconfont {
    font-size: 0.25rem;
  }
}
</style>
