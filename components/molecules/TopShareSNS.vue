<template lang="pug">
  .TopShareSNS(@mouseover="Hover()" @mouseleave="HoverOut()")
    TwitterSvg(@click="ShereSNS('twitter')" alt="Twitter").top_sns_icon
    FacebookSvg(@click="ShereSNS('facebook')" alt="Facebook").top_sns_icon
    LineSvg(@click="ShereSNS('line')" alt="LINE").top_sns_icon
    .recommend_share(:class="{'recommend_share--open':recommend}")
      .recommend_share__text SNSでシェア!
</template>
<script>
// 一番上ヘッダーメニューに出て来るシェアボタン
import TwitterSvg from '~/assets/images/twitter.svg?inline'
import FacebookSvg from '~/assets/images/facebook.svg?inline'
import LineSvg from '~/assets/images/line.svg?inline'

export default {
  components: {
    TwitterSvg,
    FacebookSvg,
    LineSvg
  },
  data() {
    return {
      hashtag: 'オンコン',
      facebook_id: '',
      recommend: false
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
    },
    Hover() {
      if (this.$mq !== 'sm') {
        this.recommend = true
      }
    },
    HoverOut() {
      if (this.$mq !== 'sm') {
        this.recommend = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.TopShareSNS {
  @include flex();
  position: relative;
  margin-left: 28px;
}
.top_sns_icon {
  width: 36px;
  height: 36px;
  display: block;
  margin-left: 8px;
  cursor: pointer;
  transition: 0.3s $ease-out-1;
  transform: translateY(0);
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    transform: translateY(-4px);
  }
}
.recommend_share {
  z-index: -1;
  @include absolute($top: 44px, $left: 0, $right: 0);
  width: 100%;
  margin: auto;
  opacity: 0;
  transform: translateY(-12px);
  transition: 0.3s $ease-out-1;
  &--open {
    opacity: 1;
    transform: translateY(0);
  }
  &__text {
    text-align: center;
    background: $theme-gradient;
    padding-top: 2px;
    padding-bottom: 4px;
    font-size: 1.4rem;
    color: $black;
  }
}

@media screen and (max-width: $sm) {
  .top_sns_icon:hover {
    transform: translateY(0);
    filter: brightness(1.3);
  }
}
</style>
