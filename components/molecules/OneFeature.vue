<template lang="pug">
  .OneFeature
    .feature_title {{title}}
    Icon1OnlineSvg.feature_logo(v-if="logo === 0")
    Icon2LinkSvg.feature_logo(v-if="logo === 1")
    Icon3ProcessSvg.feature_logo(v-if="logo === 2")
    .feature_description(v-html="description")

</template>
<script>
// SecThreeFeature.vue の1つ版。「自宅でインターン」とかそう言うやつ。
// svg
import Icon1OnlineSvg from '~/assets/images/icon1_online.svg?inline'
import Icon2LinkSvg from '~/assets/images/icon2_link.svg?inline'
import Icon3ProcessSvg from '~/assets/images/icon3_process.svg?inline'

export default {
  components: {
    Icon1OnlineSvg,
    Icon2LinkSvg,
    Icon3ProcessSvg
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    logo: {
      type: Number,
      default: -1
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.OneFeature {
  text-align: center;
}
.feature_title {
  font-weight: $weight-thin;
  font-size: 4.4rem;
}

.feature_logo {
  width: 300px;
  display: inline-block;
}

.feature_discription {
  font-size: 2rem;
}
</style>
