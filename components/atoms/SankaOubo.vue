<template lang="pug">
  .sankaoubo_box
    nuxt-link(to="/disclaimer").application_btn
      BoshushuryoSvg.sankaoubo
</template>
<script>
import SankaouboSvg from '~/assets/images/sankaoubo.svg?inline'
import BoshushuryoSvg from '~/assets/images/boshushuryo.svg?inline'
export default {
  components: {
    SankaouboSvg,
    BoshushuryoSvg
  }
}
</script>
<style lang="scss" scoped>
.application_btn {
  width: 520px;
  height: 72px;
  margin-left: auto;
  background-color: $black;
  @include flex($justifyContent: center);
  &:hover {
    .sankaoubo {
      transform: scale(0.9);
    }
  }
}

.sankaoubo {
  transition: 0.4s $ease-out-1;
  width: 260px;
}

@media screen and (max-width: $md) {
  .application_btn {
    width: 30vw;
    height: 5vw;
  }
  .sankaoubo {
    width: 18vw;
  }
}

@media screen and (max-width: $sm) {
  .application_btn {
    margin: auto;
    width: 100%;
    height: 52px;
  }
  .sankaoubo {
    width: 40%;
  }
}
</style>
