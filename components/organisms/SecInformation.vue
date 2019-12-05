<template lang="pug">
  .SecInfomation
    SectionTitle(:title="'Information'")
    .container
      .information_lists
        .information_list(v-for="(info, info_key) in informations" :key="`info_${info_key}`" :style="`padding-left: ${info_key * 34.4}px`")
          .information_list_theme {{info.theme}}
          .information_list_content(v-html="info.content")
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      informations: [
        {
          theme: '参加対象者',
          content: '<p>大学生、 大学院生、 高専生、 専攻科生</p>'
        },
        {
          theme: '審査の視点',
          content:
            '<p>実現性、 社会貢献度、 市場の成長性、 独創性、 スケジュール達成度<sup>※</p><p class="caution" style="font-size: 1.0rem; position: absolute; left: 6px;">※スケジュールに沿ったタスクの達成率も評価に加味されます。</p>'
        },
        { theme: '審査員', content: '<p>未定</p>' },
        {
          theme: '運営',
          content:
            '<p>主催：<a>Prossell</a>　協力：<a href="https://n-wakamonokikou.net/">ながおか・若者・しごと機構</a></p>'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecInformation.scss';
</style>
