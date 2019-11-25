<template lang="pug">
  .SecTopVisual
    HeaderMenu()
    .SecTopVisual
      .container
        .main_wrapper
</template>
<script>
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
export default {
  components: {
    HeaderMenu
  }
}
</script>
<style lang="scss" scoped>
.SecTopVisual {
  position: relative;
}
</style>
