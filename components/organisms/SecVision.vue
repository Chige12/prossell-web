<template lang="pug">
  .SecVision
    SectionTitle(:title="'Vision'")
    .container
      .main_wrapper
        .idea
          IdeaSvg.idea_svg
          .idea_txt 相互に相性がわかり、<br>スキルアップもできる就活スタイルへ 
        .comment
          .comment_img
          .comment_wrapper
            .comment_who
              .comment_who--post 運営代表  長岡高専 専攻科 2年 
              .comment_who--name 横山 和輝
            .comment_txt
              p 私は留学していた友人たちが、帰国後に計画留年する姿を見てきました。
              p すごく行動力もあり、優秀な友人達ですが、就活の時期が過ぎたという理由で採用が難しくなる、そんな日本の就活のスタイルはおかしいと感じました。
              p そこで地方にいても、海外にいても隔てなく、企業と学生が相互に相性を測れ、スキルアップもできる。そんな就活に変えるための第一歩としてこのコンテストを企画しました。<br><br>
              p Online Intern Contestでは、どんな場所からでもオンライン上で集まった学生たちがチームを組み、企業から出された課題に取り組みます。企業は結果だけでなく、活動プロセスを評価できるため、学生との相性も確認できます。
              p 今までにない新しい就活を提供していきます。ぜひ挑戦してみてください！
        .matching
          .matching_thinkings
            .matching_thinkings_title 学生の思い
            .matching_thinkings_txt
              p 企業に認められるような経験や実績を積みたい！
              p 自分に合う企業へ就職したい！
              p 地方でもビジコン等に挑戦できる機会が欲しい！
          .matching_logo
            MatchingSvg.matching_logo_svg
          .matching_thinkings
            .matching_thinkings_title 企業の思い
            .matching_thinkings_txt
              p ハッカソンやアイデアソン、ビジネスコンテストなど、<br>
                | 様々なイベントに参加するアクティブな学生がほしい！
              p 学生のプロジェクトの進め方を見てみたい！
</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
// svgs
import IdeaSvg from '~/assets/images/idea.svg?inline'
import MatchingSvg from '~/assets/images/matching.svg?inline'

export default {
  components: {
    SectionTitle,
    IdeaSvg,
    MatchingSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecVision.scss';
</style>
