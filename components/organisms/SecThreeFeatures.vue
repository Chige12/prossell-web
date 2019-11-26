<template lang="pug">
  .SecThreeFeatures
    SectionTitle(:title="'ThreeFeatures'")
</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
// svg
export default {
  components: {
    SectionTitle
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecThreeFeatures.scss';
</style>
