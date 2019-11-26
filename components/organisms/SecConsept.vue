<template lang="pug">
  .SecConsept
    .container
      .consept_wrapper
        .final_pitch
          FinalPitchSvg.final_pitch__svg
          .final_pitch__box
        .consept
          .consept__box
          .consept__title
            .consept__title__txt ビジネスコンテスト
            TimesSvg.consept__title__times
            .consept__title__txt インターンシップ
          .consept__discription
            p 参加学生でチームを結成し、企業からの課題テーマに取り組め！
            p サポートやフィードバックを得ながら、事業計画を完成させよう。
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
.SecConsept {
  margin-top: 32px;
}
.consept_wrapper {
  @include flex($alignItems: stretch);
}

$pitch_margin_left: 200px / 2;
$final_pitch_width: 26%;

.final_pitch {
  width: $final_pitch_width;
  &__svg {
    display: block;
    padding-left: $pitch_margin_left;
    width: 100%;
  }
  &__box {
    margin-top: 72px;
    width: 100%;
    height: 32px;
    background: $theme-gradient;
  }
}

.consept {
  width: 100% - $final_pitch_width;
  padding-left: 12%;
  &__box {
    width: 24%;
    height: 16px;
    background: $theme-gradient;
    margin-left: auto;
  }
  &__title {
    @include flex();
    margin-top: 40px;
    &__txt {
      font-weight: $weight-thin;
      font-size: 2.65vw;
    }
    &__times {
      width: 5.5vw;
    }
  }
  &__discription {
    margin-top: 40px;
    font-size: 1.8rem;
    p {
      margin: 0.6rem 0;
    }
  }
}
@media screen and (max-width: 1500px) {
  .consept {
    padding-left: 8%;
    &__title {
      margin-top: 4%;
      &__txt {
        font-size: 2.6vw;
      }
    }
    &__discription {
      margin-top: 40px;
      font-size: 1.7rem;
      p {
        margin: 0.4rem 0;
      }
    }
  }
}
@media screen and (max-width: 1250px) {
  $pitch_margin_left: (100% - 80%) / 2;
}
@media screen and (max-width: 450px) {
  $pitch_margin_left: 0;
}
</style>
