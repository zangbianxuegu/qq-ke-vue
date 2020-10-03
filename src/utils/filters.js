import Vue from 'vue'

Vue.filter('filterCourseData', (data, field) => {
  const _data = data.filter((item) => {
    if (field === 'all') {
      return true
    }

    return item.field === field
  })

  return _data.slice(0, 4)
})
