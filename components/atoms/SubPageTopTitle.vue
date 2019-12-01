<template lang="pug">
  .SubPageTopTitle
    TriSvgWhite.background_tri.background_tri_white
    TriSvgGrad.background_tri.background_tri_grad
    .top_title
      .container
        nuxt-link(to="/")
          LogoSvg.logo_svg
        .title {{title}}
    .top_title_margin
</template>
<script>
import LogoSvg from '~/assets/images/oic2020_logo_long.svg?inline'
import TriSvgGrad from '~/assets/images/tri_1.svg?inline'
import TriSvgWhite from '~/assets/images/tri_2.svg?inline'

export default {
  components: {
    LogoSvg,
    TriSvgGrad,
    TriSvgWhite
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
.background_tri {
  z-index: -1;
  @include absolute($top: 0, $left: 0);
  display: block;
  &_white {
    width: 32%;
  }
  &_grad {
    width: 20%;
  }
}
.top_title {
  @include absolute($top: 38px, $left: 0);
  width: 100%;
  pointer-events: none;
  .logo_svg {
    pointer-events: all;
    width: 420px;
  }
  .title {
    font-family: $PT-sans;
    font-size: 6rem;
  }
}
.top_title_margin {
  height: 120px;
}
</style>
