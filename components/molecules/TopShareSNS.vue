<template lang="pug">
  .TopShareSNS
    TwitterSvg(@click="ShereSNS('twitter')").top_sns_icon
    FacebookSvg(@click="ShereSNS('facebook')").top_sns_icon
    //- .top_sns_icon(@click="ShereSNS('instagram')")
      SNSIconSvg.top_sns_icon--wrapsvg
      img(src="~/assets/images/instagram.png" alt="instagram").top_sns_icon--image
    LineSvg(@click="ShereSNS('line')").top_sns_icon
</template>
<script>
// 一番上ヘッダーメニューに出て来るシェアボタン
import TwitterSvg from '~/assets/images/twitter.svg?inline'
import FacebookSvg from '~/assets/images/facebook.svg?inline'
import LineSvg from '~/assets/images/line.svg?inline'
// import SNSIconSvg from '~/assets/images/sns_icon.svg?inline'

export default {
  components: {
    TwitterSvg,
    FacebookSvg,
    LineSvg
    // SNSIconSvg
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
.TopShareSNS {
  @include flex();
}
.top_sns_icon {
  position: relative;
  width: 36px;
  height: 36px;
  display: block;
  margin-left: 8px;
  cursor: pointer;
  &:first-child {
    margin-left: 28px;
  }
  &--wrapsvg {
    width: 100%;
    height: 100%;
  }
  &--image {
    @include absolute(0, 0, 0, 0);
    display: block;
    margin: auto;
    width: 80%;
    height: 80%;
  }
}
</style>
