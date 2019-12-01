<template lang="pug">
  .corporates
    HeaderMenu()
    SubPageTopTitle(:title="'For corporates'")
    .container
      .for_corp_message オンコン（略称）では、スポンサーを随時募集中です。学生のスキルアップや成長を応援しませんか？
    SectionTitle(:title="'Prans'")
    .container
      .main_wrapper
        .pran_discription オンコンでは、3つのスポンサープランを提案させていただいております。
        .pran_table
          table
            thead
              th.contents
              th.center.center_h Pran A
              th.center.center_h Pran B
              th.center.center_h Pran C
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
.for_corp_message {
  margin: 24px 0 48px;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}
.pran_discription {
  text-align: center;
  margin: 20px 0;
  font-size: 1.8rem;
}
.pran_table {
  margin: 40px 0;
  table {
    margin: auto;
    font-size: 1.9rem;
    width: 100%;
    max-width: 1000px;
    border-spacing: 0px 4px;
  }
  .contents {
    color: $gray-txt;
  }
  .center {
    text-align: center;
    width: 20%;
    font-size: 2.8rem;
    &_h {
      font-family: $PT-sans;
    }
  }
  &_tr {
    background-color: $white;
    border-radius: 20px;
  }
  td,
  th {
    vertical-align: center;
    padding: 4px 8px;
    &:first-child {
      padding-left: 40px;
    }
  }
}

.pran_contact {
  text-align: center;
  &_email {
    margin: 16px 0;
    .email_address {
      font-size: 3rem;
      display: inline-block;
      position: relative;
      margin-bottom: 16px;
      &::after {
        content: '';
        display: block;
        @include absolute($bottom: -2px, $left: 0);
        width: 100%;
        height: 8px;
        background: $theme-gradient;
        z-index: -1;
      }
    }
    .annotation {
      color: $gray-txt;
      font-size: 1.4rem;
    }
  }
}
</style>
