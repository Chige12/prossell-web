<template lang="pug">
  .TopShareSNS
    TwitterSvg(@click="ShereSNS('twitter')").top_sns_icon
    FacebookSvg(@click="ShereSNS('facebook')").top_sns_icon
    LineSvg(@click="ShereSNS('line')").top_sns_icon
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
}
</style>
