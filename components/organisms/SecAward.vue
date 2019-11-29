<template lang="pug">
  .SecAward
    SectionTitle(:title="'Award'")
    .container
      .award_img--sm(v-if="$mq === 'sm'")
        AwardSvg.award_img--sm__svg
        .award_img--sm__cap designed by Payungkead from Flaticon
      .main_wrapper
        .award_txt
          .award_txt__row
            .award_txt__row__property 表彰式
            .award_txt__row__contents
              p 2020/03/14、新潟県長岡市 <a href="https://www.nadec-base.jp/">NaDeC BASE</a> にて開催
              | 優秀者には交通費・宿泊費等、上限2万円の支給
          .award_txt__row
            .award_txt__row__property 賞
            .award_txt__row__contents
              table
                tr
                  td 最優秀賞：
                  td 賞金10万円
                tr
                  td 企業賞：
                  td 当日までのお楽しみ
        .award_img(v-if="$mq !== 'sm'")
          AwardSvg.award_img__svg
          .award_img__cap designed by Payungkead from Flaticon
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import AwardSvg from '~/assets/images/award.svg?inline'
export default {
  components: {
    SectionTitle,
    AwardSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecAward.scss';
</style>
