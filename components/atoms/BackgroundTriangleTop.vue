<template lang="pug">
  .BackgourndTriangleTop
    .back_tri_wrapper
      TriSvgWhite.back_white
    .back_tri_wrapper
      TriSvgGrad.back_grad
</template>
<script>
import TriSvgGrad from '~/assets/images/tri_1.svg?inline'
import TriSvgWhite from '~/assets/images/tri_2.svg?inline'
export default {
  components: {
    TriSvgGrad,
    TriSvgWhite
  }
}
</script>
<style lang="scss" scoped>
.back_tri_wrapper {
  width: 100%;
  height: auto;
  @include absolute($top: 0, $left: 0);
  z-index: -1;
  overflow: hidden;
}
.back_white {
  width: 86%;
}
.back_grad {
  width: 50%;
}
@media screen and (max-width: $sm) {
  .back_white {
    width: 110%;
  }
  .back_grad {
    width: 70%;
  }
}
</style>
