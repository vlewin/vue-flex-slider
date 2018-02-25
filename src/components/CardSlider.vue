<template>
  <div id="wrapper">
    <div id="window" v-bind:style="{ '--width': width + 'vw', '--position': position }">

      <div class="slider-item" v-for="number in pages">
        <slot v-bind:name="number">
          slide-{{number}}
        </slot>
      </div>
      <!-- <div class="slider-item">
        <slot name="left">
          LEFT
        </slot>
      </div>
      <div class="slider-item">
        <slot name="center">
          <img slot="content" src="../assets/logo.png" alt="Vue.js PWA">
        </slot>
      </div>
      <div class="slider-item">
        <slot name="right">
          RIGHT
        </slot>
      </div> -->
    </div>
  </div>
</template>

<script>
  import CardSlider from './CardSlider.vue'
  import Card from './card/Card.vue'
  export default {
    name: 'CardSlider',
    components: {
      CardSlider,
      Card
    },

    data () {
      return {
        // pages: [1, 2, 3, 4],
        count: 5
      }
    },

    mounted () {
      // http://www.jstips.co/en/javascript/3-array-hacks/
    },

    computed: {
      page () {
        return this.$store.state.page
      },

      width () {
        return this.count * 100
      },

      pages () {
        return Array.apply(null, new Array(this.count)).map((elem, index) => index)
      },

      position () {
        return this.$store.state.page * -100 + 'vw'
      }
    }
  }
</script>

<style lang="sass" scoped>
  #wrapper
    background: #fff
    width: 100vw
    height: 100%
    background: grey
    overflow: hidden

  #window
    background: red
    display: flex
    transition: all 500ms
    height: 100%
    width: var(--width)
    counter-reset: page var(--page-num, 0)
    transform: translateX(var(--position))

    // &.page-1
    //   transform: translateX(0)
    // &.page-2
    //   transform: translateX(-100vw)
    // &.page-3
    //   transform: translateX(-200vw)
    // &.page-4
    //   transform: translateX(-300vw)

  .slider-item
    width: 100vw
    height: 100%
    background: #fff
    counter-increment: page

  // .slider-item::before
  //   content: counter(page) ' '

  // #window:hover
  //   transform: translateX(-200vw)
</style>
