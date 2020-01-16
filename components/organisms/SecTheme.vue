<template lang="pug">
  .SecTheme#theme
    SectionTitle(:title="'Theme'")
    .container
      .theme_discription これら3つのテーマの中から1つを取り組んでいただきます。
      .theme_lists
        .theme_list( v-for="(theme,theme_id) in themes" :key="`theme_${theme_id}`")
          .theme_number 0{{theme_id + 1}}
          .theme_wrapper
            .theme_company {{theme.company}}
            .theme_title {{theme.title}}

</template>

<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'

export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      themes: [
        {
          company: 'フラー株式会社',
          title: 'モバイルアプリの実利用データを用いた新規事業を提案せよ'
        },
        {
          company: '高専キャリア株式会社',
          title: '全国の学生がリモートでつながって仕事ができる仕組みを考えよ'
        },
        {
          company: '人材ニュース株式会社',
          title: '就活学生と地域の中小企業をマッチングする方法を考えよ'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.theme_discription {
  text-align: center;
}
.theme_lists {
  margin: 64px 0 42px;
}

.theme_list {
  position: relative;
  @include flex($justifyContent: flex-start, $alignItems: center);
  margin: 52px auto;
  width: 880px;
  &::before {
    content: '';
    @include absolute($left: 0, $bottom: 0px);
    width: 100%;
    height: 12px;
    background: $theme-gradient;
    z-index: -1;
  }
}
.theme_number {
  font-family: $PT-sans;
  font-style: italic;
  font-weight: 600;
  font-size: 4rem;
  margin: 0 32px;
  flex-shrink: 0;
}
.theme_company {
  font-size: 1.5rem;
  color: $gray-txt;
}
.theme_title {
  font-size: 2.4rem;
}

@media screen and (max-width: 1200px) {
  .theme_list {
    width: 100%;
  }
}
@media screen and (max-width: $md) {
  .theme_list::before {
    bottom: -12px;
  }
  .theme_number {
    font-size: 3.6rem;
    margin: 0 24px;
  }
  .theme_title {
    font-size: 2.2rem;
  }
}
@media screen and (max-width: $sm) {
  .theme_list::before {
    bottom: -14px;
  }
  .theme_number {
    font-size: 3rem;
    margin: 0 16px;
  }
  .theme_company {
    font-size: 1.4rem;
  }
  .theme_title {
    font-size: 2rem;
  }
}
</style>
