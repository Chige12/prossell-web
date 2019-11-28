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
            TwitterSvg(@click="ShereSNS('twitter')" alt="Twitter").share_link
            FacebookSvg(@click="ShereSNS('facebook')" alt="Facebook").share_link
            LineSvg(@click="ShereSNS('line')" alt="Line").share_link
        .share_contents
          .share_contents__title フォローして最新情報をチェック！
          .share_contents__links
            a(href="https://twitter.com/Prossell_JP").check_link.check_link__twitter
                TwitterWhiteSvg.check_link__logo
                .check_link__txt @Prossell_JP
            a(href="https://www.instagram.com/Prossell_official/").check_link.check_link__instagram
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
  },
  data() {
    return {
      hashtag: 'オンコン',
      facebook_id: ''
    }
  },
  methods: {
    ShereSNS(sns) {
      const originalURL = location.href
      const newURL = originalURL.replace(/\#.*$/, '')
      const url = encodeURIComponent(newURL)
      const hashtag = encodeURIComponent(` #${this.hashtag}\n`)
      let shareLink = null

      switch (sns) {
        case 'line':
          shareLink = `https://social-plugins.line.me/lineit/share?url=${url}&text=${hashtag}`
          break
        case 'twitter':
          shareLink = `http://twitter.com/share?url=${url}&text=${hashtag}`
          break
        case 'facebook':
          shareLink = `https://www.facebook.com/dialog/share?app_id=${this.facebook_id}&display=popup&href=${url}&redirect_uri=${url}&hashtag=${hashtag}`
          break
      }
      if (shareLink) {
        location.href = shareLink
      }
    }
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
      width: 64px;
      cursor: pointer;
    }
    .check_link {
      margin: 8px 12px;
      height: 64px;
      border-radius: 32px;
      display: inline-block;
      @include flex();
      padding: 0px 32px;
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
  a,
  a:link,
  a:visited {
    text-decoration: none;
  }
}
</style>
