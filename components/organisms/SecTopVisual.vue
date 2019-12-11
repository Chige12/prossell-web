<template lang="pug">
  .SecTopVisual
    HeaderMenu()
    .container
      .top_visual_box
        LogoSvg.logo
        .right_contents_wrapper
          .catch_copy あたらしい就活<br>のカタチ
          SankaOubo
          .application_period
            .application_period_text 応募期間
            .application_period_date 12/11 ~ 1/11
      .scroll_down(v-if="$mq !== 'sm'")
        ScrollSvg.scroll_down_svg
        .scroll_line
</template>
<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SankaOubo from '~/components/atoms/SankaOubo.vue'
// svgs
import LogoSvg from '~/assets/images/oic2020_logo.svg?inline'
import CommingSoonSvg from '~/assets/images/comming_soon.svg?inline'
import ScrollSvg from '~/assets/images/scroll.svg?inline'

export default {
  components: {
    HeaderMenu,
    SankaOubo,
    LogoSvg,
    CommingSoonSvg,
    ScrollSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecTopVisual.scss';
</style>
