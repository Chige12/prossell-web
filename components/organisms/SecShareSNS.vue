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
          .share_contents__links.share_contents__links--check
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
      facebook_id: '2518345798280802'
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
  margin-bottom: 40px;
}
.share_contents {
  margin-top: 52px;
  &__title {
    font-size: 2.1rem;
    color: $gray-txt;
    .title_black {
      display: inline-block;
      background: $black;
      color: $white;
      padding: 0 2px;
      height: 2.1rem;
      line-height: 0.9;
    }
  }
  &__links {
    margin-top: 16px;
    @include flex($justifyContent: center);
    .share_link {
      position: relative;
      margin: 8px;
      width: 58px;
      cursor: pointer;
      transition: 0.3s $ease-out-1;
      filter: drop-shadow(0 0 0 rgba($black, 0));
      &:hover {
        transform: translateY(-4px);
        filter: drop-shadow(0 2px 4px rgba($black, 0.4));
      }
    }
    .check_link {
      margin: 8px 12px;
      height: 56px;
      border-radius: 28px;
      display: inline-block;
      @include flex($justifyContent: center);
      padding: 0px 28px;
      transition: 0.3s $ease-out-1;
      filter: drop-shadow(0 0 0 rgba($black, 0));
      &:hover {
        transform: translateY(-4px);
        filter: drop-shadow(0 2px 4px rgba($black, 0.4));
      }
      &__logo {
        width: 3.2rem;
        margin-right: 14px;
      }
      &__txt {
        font-family: $PT-sans;
        font-size: 2.4rem;
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

@media screen and (max-width: $tb) {
  .check_link {
    margin: 8px 0;
  }
  .share_contents__links--check {
    display: inline-block;
  }
}
@media screen and (max-width: $sm) {
  .share_contents {
    margin-top: 32px;
    &__title {
      font-size: 1.6rem;
    }
    .title_black {
      height: 1.7rem;
    }
    &__links {
      margin-top: 8px;
      .share_link {
        width: 54px;
      }
      .check_link {
        height: 48px;
        border-radius: 24px;
        &__logo {
          width: 2.8rem;
          margin-right: 18px;
        }
        &__txt {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
