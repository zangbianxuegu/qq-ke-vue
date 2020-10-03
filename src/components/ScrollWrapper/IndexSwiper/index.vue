<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper :options="swiperOptions" ref="indexSwiper">
        <swiper-slide v-for="(item, index) of swiperData" :key="index">
          <slider-inner :data="item"></slider-inner>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import SliderInner from './SliderInner'

export default {
  name: 'IndexSwiper',
  props: {
    swiperData: Array,
  },
  components: {
    swiper,
    swiperSlide,
    SliderInner,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickabel: true,
        },
        loop: true,
        loopedSlides: 1,
        autoplay: true,
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.indexSwiper.$swiper
    },
  },
}
</script>

<style lang="scss" scoped></style>
