<template lang="pug">
  .OneFeature(v-if="$mq !== 'sm' && $mq !== 'tb'")
    .feature_title {{title}}
    Icon1OnlineSvg.feature_logo(v-if="logo === 0")
    Icon2LinkSvg.feature_logo(v-if="logo === 1")
    Icon3ProcessSvg.feature_logo(v-if="logo === 2")
    .feature_discription
      p(v-for="(dis,dis_key) in discription" :key="`OneFeaDis_${dis_key}`") {{dis}}
  .OneFeature_side(v-else)
    Icon1OnlineSvg.feature_logo(v-if="logo === 0")
    Icon2LinkSvg.feature_logo(v-if="logo === 1")
    Icon3ProcessSvg.feature_logo(v-if="logo === 2")
    .OneFeature_side_text
      .feature_title {{title}}
      .feature_discription
        p(v-for="(dis,dis_key) in discription" :key="`OneFeaDis_${dis_key}`") {{dis}}

</template>
<script>
// SecThreeFeature.vue の1つ版。「自宅でインターン」とかそう言うやつ。
// svg
import Icon1OnlineSvg from '~/assets/images/icon1_online.svg?inline'
import Icon2LinkSvg from '~/assets/images/icon2_link.svg?inline'
import Icon3ProcessSvg from '~/assets/images/icon3_process.svg?inline'

export default {
  components: {
    Icon1OnlineSvg,
    Icon2LinkSvg,
    Icon3ProcessSvg
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    logo: {
      type: Number,
      default: -1
    },
    discription: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.OneFeature {
  width: auto;
  text-align: center;
  &_side {
    width: auto;
    @include flex();
    flex-direction: row;
    .feature_logo {
      margin-right: 50px;
      width: 100px;
    }
    &_text {
      margin-right: auto;
    }
  }
}
.feature_title {
  font-weight: $weight-thin;
  font-size: 3.2rem;
  display: block;
  width: auto;
}

.feature_logo {
  margin-top: 20px;
  width: 180px;
  display: inline-block;
}

.feature_discription {
  width: auto;
  margin-top: 20px;
  font-size: 1.8rem;
  line-height: 1.8;
}

@media screen and (max-width: $md) {
  .OneFeature {
    width: auto;
  }
  .feature_title {
    font-size: 2.8rem;
  }

  .feature_discription {
    margin-top: 5px;
    font-size: 1.4rem;
  }
}

@media screen and (max-width: $tb) {
  .feature_title {
    font-size: 3.2rem;
  }
  .feature_discription {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: $sm) {
  .OneFeature_side {
    width: auto;
    .feature_logo {
      width: 70px;
      margin-right: 20px;
    }
  }
  .feature_title {
    font-size: 2.4rem;
  }
  .feature_discription {
    font-size: calc(1vw + 10px);
    line-height: 1.6;
  }
}
</style>
