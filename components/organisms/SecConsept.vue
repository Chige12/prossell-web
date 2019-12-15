<template lang="pug">
  .SecConsept#consept
    .container
      .consept_wrapper
        .final_pitch(v-if="$mq !== 'sm'")
          FinalPitchSvg.final_pitch__svg
          .final_pitch__box
        .consept
          .consept__box(v-if="$mq !== 'sm'")
          .consept__title
            .consept__title__txt ビジネスコンテスト
            TimesSvg.consept__title__times
            .consept__title__txt インターンシップ
          .consept__discription
            p 参加学生でチームを結成し、<br/>企業からの課題テーマに取り組め！
            p サポートやフィードバックを得ながら、<br/>事業計画を完成させよう。
            p 最終プレゼン後の評価で、優勝チームには賞金10万円！
</template>
<script>
import FinalPitchSvg from '~/assets/images/final_pitch_day.svg?inline'
import TimesSvg from '~/assets/images/times.svg?inline'

export default {
  components: {
    FinalPitchSvg,
    TimesSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecConsept.scss';
</style>
