<template lang="pug">
  .SecSponsors
    SectionTitle(:title="'Sponsors'")
    .container(v-if="publish")
      .sponsors_list
        .sponsor_box(v-for="(spA, spA_key) in sponsors_A" :key="`spA_key${spA_key}`").pran_A
          a(:href="spA.link")
            .sponsor_logo
            .sponsor_name <span>Pran A</span> {{spA.name}}
      .sponsors_list
        .sponsor_box(v-for="(spB, spB_key) in sponsors_B" :key="`spB_key${spB_key}`").pran_B
          a(:href="spB.link")
            .sponsor_logo
            .sponsor_name <span>Pran B</span> {{spB.name}}
      .sponsors_list
        .sponsor_box(v-for="(spC, spC_key) in sponsors_C" :key="`spC_key${spC_key}`").pran_C
          a(:href="spC.link")
            .sponsor_logo
            .sponsor_name <span>Pran C</span> {{spC.name}}

    .container(v-else)
      nuxt-link(to="/corporates")
        CommingSoonSvg.comming_soon
      p.prease_weit 情報公開までもうしばらくお待ちください。
      .sponsor_link
        h3 【企業の皆様へ】
        p スポンサーは随時募集しています。
        p スポンサー用の情報については 
          nuxt-link(to="/corporates") 企業の方へ 
          | をご覧ください。
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import CommingSoonSvg from '~/assets/images/comming_soon.svg?inline'

export default {
  components: {
    SectionTitle,
    CommingSoonSvg
  },
  data() {
    return {
      publish: false,
      sponsors_A: [
        { link: '', logo: '', name: '〇〇株式会社' },
        { link: '', logo: '', name: '〇〇株式会社' }
      ],
      sponsors_B: [
        { link: '', logo: '', name: '〇〇株式会社' },
        { link: '', logo: '', name: '〇〇株式会社' },
        { link: '', logo: '', name: '〇〇株式会社' }
      ],
      sponsors_C: [
        { link: '', logo: '', name: '〇〇株式会社' },
        { link: '', logo: '', name: '〇〇株式会社' },
        { link: '', logo: '', name: '〇〇株式会社' },
        { link: '', logo: '', name: '〇〇株式会社' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.sponsors_list {
  @include flex($wrap: wrap, $justifyContent: center);
  width: 100%;
}
.sponsor_box {
  padding: 8px;
  margin-bottom: 16px;
}
.pran_A {
  width: 50%;
}
.pran_B {
  width: 33.3333%;
}
.pran_C {
  width: 25%;
}

.sponsor_logo {
  width: 100%;
  background: $white;
  transition: 0.3s $ease-out-1;
  transform: translateY(0);
  &::before {
    content: '';
    display: block;
    padding-top: 50%;
    background: $white;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 16px rgba($black, 0.1);
  }
}
.sponsor_name {
  text-align: center;
  color: $gray-txt;
  padding: 4px 0;
  font-size: 1.8rem;
  span {
    color: $gray;
    font-size: 1.5rem;
    padding-right: 12px;
  }
}

a,
a:link,
a:visited {
  text-decoration: none;
}
@media screen and (max-width: $md) {
  .sponsor_box {
    padding: 4px;
  }
  .sponsor_name {
    font-size: 1.6rem;
    span {
      font-size: 1.3rem;
      padding-right: 8px;
    }
  }
}

@media screen and (max-width: $sm) {
  .pran_A {
    width: 100%;
  }
  .pran_B {
    width: 50%;
  }
  .pran_C {
    width: 33.3333%;
  }
  .pran_A .sponsor_name {
    font-size: 1.8rem;
    span {
      font-size: 1.5rem;
      padding-right: 12px;
    }
  }
  .pran_B .sponsor_name,
  .pran_C .sponsor_name {
    span {
      display: block;
      padding-right: 0;
    }
  }
}

// pre release

.container {
  text-align: center;
}
.comming_soon {
  width: 260px;
  transition: 0.3s $ease-out-1;
  .comming_soon_cls-2 {
    fill: $gray;
  }
  &:hover {
    transform: scale(1.1);
  }
}
.prease_weit {
  margin-top: 8px;
  color: $gray-txt;
}
.sponsor_link {
  margin-top: 52px;
  h3 {
    margin: 12px 0;
  }
  a {
    text-decoration: underline;
    text-underline-position: under;
  }
}
</style>
