<template lang="pug">
  .Footer
    .container
      .before_footer
        .wakamono 若者提案プロジェクト補助金活用事業
        .totop
          TopSvg(@click="scrollToTop()").totop_svg
    footer.footer_background
      ProssellSvg.prossell_logo
      .coppy_right Copyright Prossell All rights reserved.

</template>
<script>
// 「若者〜〜活用事業」や「↑TOP」も含む
import TopSvg from '~/assets/images/top.svg?inline'
import ProssellSvg from '~/assets/images/prossell.svg?inline'

export default {
  components: {
    TopSvg,
    ProssellSvg
  },
  methods: {
    scrollToTop() {
      this.$scrollTo('#top')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/Footer.scss';
</style>
