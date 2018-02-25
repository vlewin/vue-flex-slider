<template>
  <div class="card">
    <div class="slider" v-bind:class="{ open }">
      <div class="slider-item up" v-on:click="toggle">
        <slot name="header">
          CARD WITH SLIDER HEADER
        </slot>

        <slot name="content">
          CARD CONTENT
        </slot>

        <slot name="footer">
          CARD FOOTER
        </slot>
      </div>
      <div class="slider-item down" v-on:click="toggle">
        TEXT
      </div>
    </div>
  </div>
</template>

<script>
  import CardHeader from './CardHeader.vue'
  import CardContent from './CardContent.vue'
  import CardFooter from './CardFooter.vue'
  export default {
    name: 'CardWithSlider',
    components: {
      CardHeader,
      CardContent,
      CardFooter
    },

    data () {
      return {
        open: false,
        msg: 'Welcome to Your Vue.js PWA'
      }
    },

    methods: {
      toggle () {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="sass" scoped>
  .card
    display: flex
    flex-direction: column
    height: 100%

    .card-header
      background: tomato
      height: 10vh

    .card-content
      flex: 1
      background: #FFBF00

    .card-footer
      display: flex
      justify-content: space-around
      background: #42b983
      height: 10vh

      button
        font-weight: bold
        background: transparent
        border: none
        color: #fff
        width: 100%
        outline: none
</style>

  <style lang="sass" scoped>
    .card
      width: 100%
      height: 100%
      background: grey
      overflow: hidden

    .slider
      background: red
      transition: all 500ms
      height: 200vh

      &.up
        transform: translateX(0)
      &.down
        transform: translateY(-100vh)

    .slider-item
      height: 100vh
      width: 100%
      background: #FFBF00
      display: flex
      flex-direction: column
      flex: auto
      padding-bottom: 10vh

    .slider.open
      transform: translateY(-100vh)
  </style>
