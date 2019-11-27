<template lang="pug">
  .OneFeature
    .feature_title {{title}}
    Icon1OnlineSvg.feature_logo(v-if="logo === 0")
    Icon2LinkSvg.feature_logo(v-if="logo === 1")
    Icon3ProcessSvg.feature_logo(v-if="logo === 2")
    .feature_discription(v-html="discription")

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
    discription: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.OneFeature {
  text-align: center;
  margin: 0 40px;
}
.feature_title {
  font-weight: $weight-thin;
  font-size: 3.2rem;
}

.feature_logo {
  margin-top: 20px;
  width: 180px;
  display: inline-block;
}

.feature_discription {
  margin-top: 20px;
  font-size: 1.8rem;
}
</style>
