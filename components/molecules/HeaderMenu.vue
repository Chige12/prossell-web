<template lang="pug">
  .HeaderMenu
    .container
      .header_menu
        .header_menu_links(v-if="$mq === 'sm'")
          .menu_open_btn(@click="OpenMenu()")
            MenuSvg.menu_svg
          .menu_close_btn(v-if="menu" @click="CloseMenu()")
          .menu_links_box(:class="{'menu_links_box--open':menu}")
            .header_menu_link(v-for="(link,link_id) in links" :key="`header_menu_link_${link_id}`")
              nuxt-link(:to="link.to").header_menu_link_title {{link.name}}
        .header_menu_links(v-else)
          .header_menu_link(v-for="(link,link_id) in links" :key="`header_menu_link_${link_id}`")
            nuxt-link(:to="link.to").header_menu_link_title {{link.name}}
        .header_menu_sns
          TopShareSNS
</template>
<script>
// components
import TopShareSNS from '~/components/molecules/TopShareSNS.vue'
// svg
import MenuSvg from '~/assets/images/menu.svg?inline'

export default {
  components: {
    TopShareSNS,
    MenuSvg
  },
  data() {
    return {
      menu: false,
      links: [
        { to: '/', name: 'About' },
        { to: '/', name: '企業の方へ' }
      ]
    }
  },
  methods: {
    OpenMenu() {
      this.menu = true
    },
    CloseMenu() {
      this.menu = false
    }
  }
}
</script>
<style lang="scss" scoped>
$header-height: 80px;

.HeaderMenu {
  width: 100%;
  height: $header-height;
}
.header_menu {
  width: 100%;
  height: $header-height;
  @include flex($justifyContent: flex-end, $alignItems: center);
}
.header_menu_links {
  width: 100%;
  @include flex($justifyContent: flex-end, $alignItems: center);
}
.header_menu_link {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}

.menu_open_btn {
  z-index: 100;
  position: fixed;
  top: 22px;
  left: 22px;
  .menu_svg {
    width: 32px;
    filter: drop-shadow(0 0 4px rgba($black, 0.2));
  }
}
.menu_close_btn {
  z-index: 101;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.menu_links_box {
  z-index: 102;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($black, 0.8);
  width: 72vw;
  height: 100vh;
  padding: 20px;
  transform: translateX(-72vw);
  transition: 0.3s $ease-out-1;
  &--open {
    transform: translateX(0);
  }
}

a.header_menu_link_title,
a.header_menu_link_title:visited,
a.header_menu_link_title:link {
  text-decoration-line: none;
}

@media screen and (max-width: $sm) {
  $header-height: 64px;
  .header_menu_link {
    margin: 0;
    display: block;
    padding: 12px 0;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background: $theme-gradient;
    }
  }
  .header_menu_link_title {
    font-size: 2.4rem;
    color: $white;
  }
}
</style>
