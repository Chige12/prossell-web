<template lang="pug">
  .disclaimer
    HeaderMenu()
    SubPageTopTitle(:title="'Rules'")
    .container
      .main_wrapper
        BoshushuryoSvg
        .disclaimer_box
          .disclaimer_box_title: p 応募の前にご確認ください。
          .disclaimer_box_txt(v-html="disclaimer")
        .disclaimer_checkbox(@click="toggleAgreement()")
          .disclaimer_checkbox_icon 
            CheckSvg.check_icon(v-if="agree")
          .disclaimer_checkbox_txt 上記内容に同意の上、応募します。
        button(:disabled="!agree" @click="goToForm()" :class="{'agree_button--disabled': !agree}").agree_button 応募フォームへ
    Footer
</template>
<script>
// components
import Disclaimer from '~/assets/disclaimer.md'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'

import CheckSvg from '~/assets/images/check.svg?inline'
import BoshushuryoSvg from '~/assets/images/boshushuryo.svg?inline'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer,
    CheckSvg,
    BoshushuryoSvg
  },
  data() {
    return {
      agree: false
    }
  },
  computed: {
    disclaimer() {
      return Disclaimer
    }
  },
  methods: {
    toggleAgreement() {
      this.$scrollTo('#top')
      // this.agree = this.agree !== true
    },
    goToForm() {
      window.location.href =
        'https://docs.google.com/forms/d/e/1FAIpQLSfpyvlck5dD3NHa8azbPXwViVAoVvVxDIfdL0ryhwPLyC_IJg/viewform'
    }
  },
  head() {
    return {
      title: '応募の前にご確認ください',
      titleTemplate: '%s - ONLINE INTERN CONTEST 2020'
    }
  }
}
</script>
<style lang="scss" scoped>
.main_wrapper {
  text-align: center;
}
.disclaimer_box {
  position: relative;
  width: 100%;
  height: 600px;
  text-align: left;
  background: $white;
  padding: 48px;
  z-index: auto;
  &_title {
    @include absolute($top: -20px, $left: 0, $right: 0);
    width: 100%;
    z-index: 1;
    text-align: center;
    p {
      display: inline-block;
      width: auto;
      background-color: $black;
      padding: 8px 48px;
      font-size: 2.4rem;
      color: $white;
    }
  }
  &::before {
    content: '';
    display: block;
    @include absolute($top: -4px, $left: -4px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background: $theme-gradient;
    z-index: -1;
  }
  &_txt {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    /deep/ h2,
    /deep/ h3,
    /deep/ p {
      margin: 1.2em 0 0.6em;
    }
  }
}
.disclaimer_checkbox {
  opacity: 0.3;

  margin: 64px auto;
  @include flex($justifyContent: center);
  display: inline-flex;
  font-size: 2rem;
  cursor: pointer;
  &_icon {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border: 4px solid $link;
    position: relative;
    .check_icon {
      @include absolute(0, 0, 0, 0);
      display: block;
      margin: auto;
      width: 20px;
      .check_cls-1 {
        fill: $link;
      }
    }
  }
  &_txt {
    margin-left: 16px;
  }
}
.agree_button {
  position: relative;
  width: 100%;
  height: 64px;
  text-align: center;
  z-index: auto;
  font-size: 2.4rem;
  background: $white;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    @include absolute($top: -4px, $left: -4px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background: $theme-gradient;
    z-index: -1;
  }
  &--disabled {
    background: $light-gray;
    cursor: unset;
    outline: none;
    &::before {
      opacity: 0.4;
    }
  }
}

:active,
:focus {
  outline: none;
}

@media screen and (max-width: $md) {
  .disclaimer_box {
    margin-top: 64px;
    padding: 32px;
    &_title {
      p {
        padding: 8px 32px;
        font-size: 2.2rem;
      }
    }
  }
  .disclaimer_checkbox {
    font-size: 1.9rem;
  }
}
@media screen and (max-width: $sm) {
  .disclaimer_box {
    padding: 50px 16px;
    &_title {
      p {
        font-size: 2rem;
      }
    }
  }
  .disclaimer_checkbox {
    font-size: 1.7rem;
  }
}
</style>
