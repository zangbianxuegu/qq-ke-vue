<template>
  <div class="container">
    <page-header :backIconShow="false" :listIconShow="true"> </page-header>
    <index-scroll-wrapper></index-scroll-wrapper>
  </div>
</template>

<script>
import IndexScrollWrapper from '@components/ScrollWrapper/Index'

import PageHeader from '@components/Header'

export default {
  name: 'IndexPage',
  components: {
    IndexScrollWrapper,
    PageHeader,
  },
}
</script>

<style lang="scss" scoped></style>
