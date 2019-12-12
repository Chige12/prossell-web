<template>
  <div id="top">
    <nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const hash = this.$route.hash
      if (hash && hash.match(/^#.+$/)) {
        this.$scrollTo(hash)
      }
    })
  }
}
</script>
<style lang="scss">
html {
  font-family: $noto-sans;
  font-weight: 400;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-size: 1.6rem; /* basic size 14px */
  background-color: $light-gray;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  width: calc(100% - 280px);
  .main_wrapper {
    margin: 0 auto;
    width: calc(100% - 200px);
  }
}

a,
a:link,
a:visited {
  color: $link-txt;
  text-decoration-line: underline;
  text-underline-position: under;
  transition: 0.2s ease-out;
  &:hover,
  &:active,
  &:focus {
    color: lighten($link-txt, 20%);
  }
}

@media screen and (max-width: $md) {
  // md
  .container {
    width: 80%;
    .main_wrapper {
      width: 80%; //64%
    }
  }
}
@media screen and (max-width: $tb) {
  // md
  .container {
    .main_wrapper {
      width: 90%;
    }
  }
}
@media screen and (max-width: $sm) {
  // md
  .container {
    width: calc(100% - 40px);
    .main_wrapper {
      width: 100%;
    }
  }
}
</style>
