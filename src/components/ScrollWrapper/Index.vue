<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <index-swiper :swiperData="swiperData"> </index-swiper>
      <main-title :data="recomTitleData"></main-title>
      <recom-course-list :recomCourseData="recomCourseData"></recom-course-list>
      <div v-if="fieldData.length > 0 && courseData.length > 0">
        <main-title :data="fieldData[0]"></main-title>
        <course-list
          :courseData="courseData | filterCourseData('0')"
        ></course-list>
        <main-title :data="fieldData[1]"></main-title>
        <course-list
          :courseData="courseData | filterCourseData('1')"
        ></course-list>
        <main-title :data="fieldData[2]"></main-title>
        <course-list
          :courseData="courseData | filterCourseData('2')"
        ></course-list>
        <main-title :data="fieldData[3]"></main-title>
        <course-list
          :courseData="courseData | filterCourseData('3')"
        ></course-list>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

import IndexSwiper from './IndexSwiper'
import MainTitle from './MainTitle'
import RecomCourseList from './RecomCourseList'
import CourseList from './CourseList'

import IndexModel from '@models/Index'
const indexModel = new IndexModel()

export default {
  name: 'IndexScrollWrapper',
  components: {
    IndexSwiper,
    MainTitle,
    RecomCourseList,
    CourseList,
  },
  data() {
    return {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: [],
      recomTitleData: {
        field_name: '推荐课程',
        field: 'all',
      },
    }
  },
  mounted() {
    this.getCourseDatas()
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true,
    })
  },
  methods: {
    async getCourseDatas() {
      const data = await indexModel.getCourseDatas()
      const res = data.result
      this.swiperData = res.swipers
      this.fieldData = res.fields
      this.courseData = res.courses
      this.recomCourseData = res.recomCourses
    },
  },
}
</script>

<style lang="scss" scoped></style>
