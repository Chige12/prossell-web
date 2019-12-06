<template lang="pug">
  .SecInfomation
    SectionTitle(:title="'Information'")
    .container
      .information_lists
        .information_list.participate
          p.information_list_theme 参加対象者
          p.information_list_content 大学生、 大学院生、 高専生、 専攻科生
        .information_list.view
          p.information_list_theme 審査の視点
          .information_list_content
            p.information_list_content--text 実現性、 社会貢献度、 市場の成長性、
            | 独創性、 スケジュール達成度<sup>※</sup>
            p.information_list_content--caution ※スケジュールに沿ったタスクの達成率も評価に加味されます。
        .information_list.judge
          p.information_list_theme 審査員
          p.information_list_content 未定
        .information_list.management
          p.information_list_theme 運営
          .information_list_content
            p.information_list_content--sponsor 主催：
              a(href = "") Prossell
            p.information_list_content--coorporate 協力：
              a(href = "https://n-wakamonokikou.net/") ながおか・若者・しごと機構

</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecInformation.scss';
</style>
