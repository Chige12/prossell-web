<template lang="pug">
  .SectionTitle
    .title_wrapper(v-if="title === 'ThreeFeatures'")
      h2 3つの特徴
    .title_wrapper(v-else)
      h2 {{title}}
</template>
<script>
// ScheduleとかInfomationなど、セクションのタイトルを作る。「3つの特徴」だけ変則的
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped></style>
