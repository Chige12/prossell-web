<template lang="pug">
  .SecShareSNS
    SectionTitle(:title="'Share SNS'")
    .container
      .main_wrapper
        .share_contents
          .share_contents__title
            span.title_black #オンコン
            | をSNSでシェア！
          .share_contents__links
            TwitterSvg.share_link
            FacebookSvg.share_link
            LineSvg.share_link
        .share_contents
          .share_contents__title フォローして最新情報をチェック！
          .share_contents__links
            .check_link.check_link__twitter
              TwitterWhiteSvg.check_link__logo
              .check_link__txt @Prossell_JP
            .check_link.check_link__instagram
              InstagramWhiteSvg.check_link__logo
              .check_link__txt @prossell_official
</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
// svg
import TwitterSvg from '~/assets/images/twitter.svg?inline'
import FacebookSvg from '~/assets/images/facebook.svg?inline'
import LineSvg from '~/assets/images/line.svg?inline'
import TwitterWhiteSvg from '~/assets/images/twitter_white.svg?inline'
import InstagramWhiteSvg from '~/assets/images/instagram_white.svg?inline'

export default {
  components: {
    SectionTitle,
    TwitterSvg,
    FacebookSvg,
    LineSvg,
    TwitterWhiteSvg,
    InstagramWhiteSvg
  }
}
</script>
<style lang="scss" scoped>
.main_wrapper {
  text-align: center;
}
.share_contents {
  margin-top: 52px;
  &__title {
    font-size: 2.2rem;
    color: $gray-txt;
    .title_black {
      display: inline-block;
      background: $black;
      color: $white;
      padding: 0 2px;
      height: 2.2rem;
      line-height: 0.9;
    }
  }
  &__links {
    margin-top: 16px;
    @include flex($justifyContent: center);
    .share_link {
      margin: 8px;
      width: 60px;
    }
    .check_link {
      margin: 8px 12px;
      height: 64px;
      border-radius: 32px;
      padding: 0px 32px;
      @include flex();
      &__logo {
        width: 3.2rem;
        margin-right: 18px;
      }
      &__txt {
        font-family: $PT-sans;
        font-size: 2.8rem;
        color: $white;
      }
      &__twitter {
        background-color: $twitter;
      }
      &__instagram {
        background: linear-gradient(
          -60deg,
          #4b65d4 0%,
          #d72f80 85%,
          #da2e79 100%
        );
      }
    }
  }
}
</style>
