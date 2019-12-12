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
    width: 24%;
  }
  &_grad {
    width: 16%;
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
    font-style: italic;
    font-weight: 600;
    font-size: 6rem;
  }
}
.top_title_margin {
  height: 120px;
}

@media screen and (max-width: $md) {
  .background_tri {
    &_white {
      width: 50%;
    }
    &_grad {
      width: 36%;
    }
  }
  .top_title {
    top: 88px;
    .logo_svg {
      width: calc(20vw + 200px);
    }
    .title {
      margin-top: -8px;
      font-size: calc(3vw + 26px);
    }
  }
  .top_title_margin {
    height: 100px;
  }
}

@media screen and (max-width: $sm) {
  .background_tri {
    &_white {
      width: 56%;
    }
    &_grad {
      width: 42%;
    }
  }
  .top_title {
    top: 74px;
    .logo_svg {
      width: calc(22vw + 220px);
    }
    .title {
      margin-top: -8px;
      font-size: calc(3.2vw + 30px);
    }
  }
  .top_title_margin {
    height: 70px;
  }
}
</style>
