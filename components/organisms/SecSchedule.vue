<template lang="pug">
  .SecSchedule
    SectionTitle(:title="'Schedule'")
    .container
      .main_wrapper
        .application_period
          .application_period_date 12/11 ~ 1/11
          .application_period_text 参加応募期間
        .application_large
          Slant1Svg.slant_1
          .application_large_date 1/14
          .application_large_text Kickoff
          .explanation
            .explanation_text 3人1組チームとテーマの発表
        .contest_periods
          .contest_period(v-for="(sch, sch_key) in schedules" :key="`sch_${sch_key}`" :style="`padding-left: ${sch_key * 28}px`")
            .contest_period_date {{sch.data}}
            .contest_period_text {{sch.content}}


</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
// svg
import Slant1Svg from '~/assets/images/slant_1.svg?inline'
import Slant2Svg from '~/assets/images/slant_2.svg?inline'
import Slant3Svg from '~/assets/images/slant_3.svg?inline'
export default {
  components: {
    SectionTitle,
    Slant1Svg,
    Slant2Svg,
    Slant3Svg
  },
  data() {
    return {
      schedules: [
        { data: 'Week1', content: 'アイスブレーク、本質的課題の確認' },
        { data: 'Week2', content: 'アイデア出し' },
        { data: 'Week3', content: '解決策の提示' },
        { data: 'Week4', content: '中間発表（動画の提出）、フィードバック' },
        { data: 'Week5,6', content: '事業計画、資金計画の作成' },
        { data: 'Week7', content: '最終発表準備、事業計画作成' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecSchedule.scss';
</style>
