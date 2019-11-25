<template lang="pug">
  .index
    BackgroundTriangleTop.background
    SecTopVisual.topvisual
    SecConsept
    SecThreeFeatures
    BackgroundTriangleMiddle.background
    SecSchedule
    SecInformation
    SecVision
    .separator
    SecAward
    SecShareSNS
    SecSponsors
    Footer
</template>

<script>
// background triangle
import BackgroundTriangleTop from '~/components/atoms/BackgroundTriangleTop.vue'
import BackgroundTriangleMiddle from '~/components/atoms/BackgroundTriangleMiddle.vue'

// section
import SecTopVisual from '~/components/organisms/SecTopVisual.vue'
import SecConsept from '~/components/organisms/SecConsept.vue'
import SecThreeFeatures from '~/components/organisms/SecThreeFeatures.vue'
import SecSchedule from '~/components/organisms/SecSchedule.vue'
import SecInformation from '~/components/organisms/SecInformation.vue'
import SecVision from '~/components/organisms/SecVision.vue'
import SecAward from '~/components/organisms/SecAward.vue'
import SecShareSNS from '~/components/organisms/SecShareSNS.vue'
import SecSponsors from '~/components/organisms/SecSponsors.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    BackgroundTriangleTop,
    SecTopVisual,
    SecConsept,
    SecThreeFeatures,
    BackgroundTriangleMiddle,
    SecSchedule,
    SecInformation,
    SecVision,
    SecAward,
    SecShareSNS,
    SecSponsors,
    Footer
  },
  head() {
    return {
      titleTemplate: null
    }
  }
}
</script>

<style lang="scss">
.index {
  min-height: 100vh;
}
</style>
