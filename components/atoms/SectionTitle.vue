<template lang="pug">
  .SectionTitle
    .title_wrapper(v-if="title === 'ThreeFeatures'")
      .threefeatures
        Three.threefeatures_three
        h2.threefeatures_other つの特徴
    .title_wrapper(v-else)
      h2 {{title}}
</template>
<script>
// ScheduleとかInfomationなど、セクションのタイトルを作る。「3つの特徴」だけ変則的
import Three from '~/assets/images/three.svg?inline'

export default {
  components: {
    Three
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SectionTitle.scss';
</style>
