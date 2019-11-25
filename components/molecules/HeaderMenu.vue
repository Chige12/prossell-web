<template lang="pug">
  .HeaderMenu
    .container
      .header_menu
        .header_menu_links
          .header_menu_link(v-for="(link,link_id) in links" :key="`header_menu_link_${link_id}`")
            nuxt-link(:to="link.to").header_menu_link_title {{link.name}}
        .header_menu_sns
          TopShareSNS
</template>
<script>
import TopShareSNS from '~/components/molecules/TopShareSNS.vue'

export default {
  components: {
    TopShareSNS
  },
  data() {
    return {
      links: [
        { to: '/', name: 'About' },
        { to: '/', name: '企業の方へ' }
      ]
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
  @include flex($justifyContent: flex-end, $alignItems: center);
  .header_menu_link {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}

a.header_menu_link_title,
a.header_menu_link_title:visited,
a.header_menu_link_title:link {
  text-decoration-line: none;
}
</style>
