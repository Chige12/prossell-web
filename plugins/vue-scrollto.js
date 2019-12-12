import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0.75, 0, 0.25, 1],
  offset: -100
})
