<template lang="pug">
  .corporates
    HeaderMenu()
    SubPageTopTitle(:title="'For corporates'")
    .container
      .for_corp_message オンコン（略称）では、スポンサーを随時募集中です。学生のスキルアップや成長を応援しませんか？
    SectionTitle(:title="'Plans'")
    .container
      .main_wrapper
        .pran_discription オンコンでは、3つのスポンサープランを提案させていただいております。
        .pran_table
          table
            thead
              th.contents
              th.center.center_h Plan A
              th.center.center_h Plan B
              th.center.center_h Plan C
            tbody
              tr.pran_table_tr(v-for="trk in table_data.length" :key="`corp_trk${trk}`")
                td.contents {{table_data[trk-1][0]}}
                td.center.center_d {{table_data[trk-1][1]}}
                td.center.center_d {{table_data[trk-1][2]}}
                td.center.center_d {{table_data[trk-1][3]}}
        .pran_contact
          .pran_contact_message 価格設定等の詳細情報、資料請求、ご相談等はこちらのメールアドレスまでご連絡ください。
          .pran_contact_email
            .email_address support◇prossell.jp
            .annotation ◇を@に変えて送信してください。
    Footer
</template>
<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer
  },
  data() {
    return {
      table_data: [
        ['オンコンの課題テーマの提供', '○', '×', '×'],
        ['学生へのコンタクト', '○', '○', '×'],
        ['ポスターやWebサイト等への社名掲載', '○', '○', '○'],
        ['SNS等での社名の掲載', '○', '○', '○']
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/pages/corporates.scss';
</style>
