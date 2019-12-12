<template lang="pug">
  .posterDownload
    SectionTitle(:title="'Poster'")
    .container
      .main_wrapper
        a(href="./download/oic2020_poster.pdf" target="__blank").download_image_wrapper
          img(src="~/assets/images/oic2020_poster.png").download_image
        .download_discription コチラのオンコンのポスターをダウンロードすることができます。
        a.download_btn(href="./download/oic2020_poster.pdf" target="__blank") 別ページでPDFを開く
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
.main_wrapper {
  text-align: center;
  padding: 0 64px;
}
.download_image {
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 520px;
  box-shadow: 3px 3px 16px 0 rgba($black, 0.5);
  transition: 0.5s $ease-out-1;
  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 30px 0 rgba($black, 0.3);
  }
  &_wrapper {
    display: block;
    padding: 16px;
  }
}
.download_discription {
  margin: 36px 0 16px;
}
.download_btn {
  font-size: 1.8rem;
}

@media screen and (max-width: $sm) {
  .main_wrapper {
    padding: 0;
  }
}
</style>
