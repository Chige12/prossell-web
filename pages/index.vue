<template lang="pug">
  .container
    <div>
      logo
      h1.title prossell-web
      h2.subtitle My remarkable Nuxt.js project
      p {{$mq}}
      .links
        a(href="https://nuxtjs.org/" target="_blank" class="button--green") Documentation
        a(href="https://github.com/nuxt/nuxt.js", target="_blank", class="button--grey") GitHub
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      titleTemplate: null
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $PT-sans;
  display: block;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: $weight-thin;
  font-size: 42px;
  color: $theme-blue;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
