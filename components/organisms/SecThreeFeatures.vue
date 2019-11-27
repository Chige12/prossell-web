<template lang="pug">
  .SecThreeFeatures
    SectionTitle(:title="'ThreeFeatures'")
    .feature_topic(v-for="(feature,feature_id) in features")
      OneFeature(
        :title="feature.title"
        :logo="feature_id"
        :description="feature.description"
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
          description:
            '地方学生でも大丈夫。<br>全てのプロセスがオンラインで完結！<br>最終発表もビデオ通話にて。'
        },
        {
          title: '企業とのつながり',
          description:
            '企業の方と繋がるチャンス。<br>積極的に会話していこう!<br>ヘッドハンティングの可能性も!'
        },
        {
          title: 'プロセス評価',
          description:
            '結果だけが全てじゃない。<br>活動プロセスを企業側へ共有して、<br>総合的な評価をもらおう!'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecThreeFeatures.scss';
</style>
