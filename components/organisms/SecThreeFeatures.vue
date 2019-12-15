<template lang="pug">
  .SecThreeFeatures#threefeatures
    .container
      SectionTitle(:title="'ThreeFeatures'")
      .feature_content_wrapper
        .feature_content
          .feature_topic(v-for="(feature,feature_id) in features")
            OneFeature(
              :title="feature.title"
              :logo="feature_id"
              :discription="feature.discription"
            )
</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import OneFeature from '~/components/molecules/OneFeature.vue'
// svg
export default {
  components: {
    SectionTitle,
    OneFeature
  },
  data() {
    return {
      features: [
        {
          title: '自宅でインターン',
          discription: [
            '地方学生でも大丈夫。',
            '全てのプロセスがオンラインで完結！',
            '最終発表もビデオ通話にて。'
          ]
        },
        {
          title: '企業とのつながり',
          discription: [
            '企業の方と繋がるチャンス。',
            '積極的に会話していこう!',
            'ヘッドハンティングの可能性も!'
          ]
        },
        {
          title: 'プロセス評価',
          discription: [
            '結果だけが全てじゃない。',
            '活動プロセスを企業側へ共有して、',
            '総合的な評価をもらおう!'
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecThreeFeatures.scss';
</style>
