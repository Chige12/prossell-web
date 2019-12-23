<template lang="pug">
  .index
    BackgroundTriangleTop.background
    SecTopVisual.topvisual
    SecConsept
    SecThreeFeatures
    .tri_mid_wrapper
      BackgroundTriangleMiddle
      SecSchedule
      SecInformation
      SecVision
    .separator
      SankaOubo.sankaoubo_box_parent
    SecTheme
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
import SecTheme from '~/components/organisms/SecTheme.vue'
import SecAward from '~/components/organisms/SecAward.vue'
import SecShareSNS from '~/components/organisms/SecShareSNS.vue'
import SecSponsors from '~/components/organisms/SecSponsors.vue'
import Footer from '~/components/organisms/Footer.vue'
import SankaOubo from '~/components/atoms/SankaOubo.vue'

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
    SecTheme,
    SecAward,
    SecShareSNS,
    SecSponsors,
    Footer,
    SankaOubo
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
.separator {
  position: relative;
  background: $theme-gradient;
  height: 200px;
  width: 100%;
}
.tri_mid_wrapper {
  position: relative;
  overflow: hidden;
}
.sankaoubo_box_parent {
  @include absolute(0, 0, 0, 0);
  margin: auto;
  width: min-content;
  height: min-content;
  z-index: 0;
  box-shadow: 0 0 32px 16px $white;
  transition: 0.5s $ease-out-1;
  &:hover {
    box-shadow: 0 0 32px 0px $white;
  }
}

@media screen and (max-width: $md) {
  .sankaoubo_box_parent {
    transform: scale(1.5);
  }
}

@media screen and (max-width: $sm) {
  .sankaoubo_box_parent {
    transform: scale(1);
    width: 80%;
  }
}
</style>
