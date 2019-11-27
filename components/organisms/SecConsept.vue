<template lang="pug">
  .SecConsept
    SectionTitle(:title="'Consept'")
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  }
}
</script>
<style lang="scss" scoped>
.SecConsept {
  margin-top: 60px;
}
</style>
