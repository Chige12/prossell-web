<template lang="pug">
  .BackgroundTriangleMiddle
    TriSvgWhite.back_white
</template>
<script>
import TriSvgWhite from '~/assets/images/tri_3.svg?inline'

export default {
  components: {
    TriSvgWhite
  }
}
</script>

<style lang="scss" scoped>
.BackgroundTriangleMiddle {
  @include absolute($bottom: 0, $left: 0);
  width: 100%;
  height: 100%;
  z-index: -1;
}
.back_white {
  @include absolute($bottom: 0, $left: 0);
  display: block;
  padding-top: 200px;
  height: 100%;
}
@media screen and (max-width: $sm) {
  .back_white {
    padding-top: 0;
    max-height: 1000px;
  }
}
</style>
