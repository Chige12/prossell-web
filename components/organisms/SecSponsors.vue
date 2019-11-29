<template lang="pug">
  .SecSponsors
    SectionTitle(:title="'Sponsors'")
    .container
      .sponsors_list
        .sponsor_box(v-for="(spA, spA_key) in sponsors_A" :key="`spA_key${spA_key}`").pran_A
          a(:href="spA.link")
            .sponsor_logo
            .sponsor_name {{spA.name}}
      .sponsors_list
        .sponsor_box(v-for="(spB, spB_key) in sponsors_B" :key="`spB_key${spB_key}`").pran_B
          a(:href="spB.link")
            .sponsor_logo
            .sponsor_name {{spB.name}}
      .sponsors_list
        .sponsor_box(v-for="(spC, spC_key) in sponsors_C" :key="`spC_key${spC_key}`").pran_C
          a(:href="spC.link")
            .sponsor_logo
            .sponsor_name {{spC.name}}
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      sponsors_A: [
        { link: '', logo: '', name: 'あ' },
        { link: '', logo: '', name: 'あ' }
      ],
      sponsors_B: [
        { link: '', logo: '', name: '' },
        { link: '', logo: '', name: '' },
        { link: '', logo: '', name: '' }
      ],
      sponsors_C: [
        { link: '', logo: '', name: '' },
        { link: '', logo: '', name: '' },
        { link: '', logo: '', name: '' },
        { link: '', logo: '', name: '' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.sponsors_list {
  @include flex($wrap: wrap);
  width: 100%;
}
.sponsor_box {
  padding: 4px;
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
  min-height: 50px;
  background: $white;
}
.sponsor_name {
  text-align: center;
  color: $gray-txt;
  padding-top: 4px;
  padding-bottom: 8px;
}

a,
a:link,
a:visited {
  text-decoration: none;
}
</style>
