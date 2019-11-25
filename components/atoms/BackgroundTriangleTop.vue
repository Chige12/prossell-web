<template lang="pug">
  .BackgourndTriangleTop
    .back_tri_wrapper.back_white
      TriSvgWhite.back_tri
    .back_tri_wrapper.back_grad
      TriSvgGrad.back_tri
      
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
  @include absolute($top: 0, $left: 0);
}
.back_white .back_tri {
  width: 200px;
}
.back_grad .back_tri {
  width: 100px;
}
</style>
