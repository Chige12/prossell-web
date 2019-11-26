<template lang="pug">
  .Footer
    .container
      .before_footer
        .wakamono 若者提案プロジェクト補助金活用事業
        .totop
          TopSvg(@click="scrollToTop()").totop_svg
    footer.footer_background

</template>
<script>
// 「若者〜〜活用事業」や「↑TOP」も含む
import TopSvg from '~/assets/images/top.svg?inline'

export default {
  components: {
    TopSvg
  },
  methods: {
    scrollToTop() {
      scrollTo(0, 0)
    }
  }
}
</script>
<style lang="scss" scoped>
.Footer {
  margin-top: 40px;
}

.before_footer {
  position: relative;
}
.wakamono {
  text-align: center;
  padding-bottom: 24px;
  font-size: 2rem;
}
.totop {
  @include absolute($bottom: 16px, $right: 0);
  &_svg {
    display: block;
    width: 40px;
    cursor: pointer;
    padding: 4px 0;
    &:hover {
      animation: 0.8s bound ease-in-out infinite;
    }
  }
}

.footer_background {
  background-color: $black;
  width: 100%;
  height: 150px;
}

@keyframes bound {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
