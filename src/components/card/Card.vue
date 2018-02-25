<template>
  <div class="card" v-bind:class="{ open: open }" v-on:click="toggle">
    <slot name="header">
      CARD HEADER
    </slot>

    <slot name="content">
        CARD CONTENT
    </slot>

    <slot name="footer">
      CARD FOOTER
    </slot>
  </div>
</template>

<script>
  import CardHeader from './CardHeader.vue'
  import CardContent from './CardContent.vue'
  import CardFooter from './CardFooter.vue'
  export default {
    name: 'Card',
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
        console.log('toggle')
        this.open = !this.open
      }
    }
  }
</script>

<style lang="sass" scoped>
  .card
    display: flex
    flex-direction: column
    width: 100%
    height: 100%

    div
      flex: 1
      width: 100%
      transition: flex 0.5s

    .card-header
      background: tomato
      overflow: hidden

    .card-content
      background: #42b983
      justify-content: space-around

    .card-footer
      background: orange
      overflow: hidden

      button
        font-weight: bold
        background: transparent
        border: none
        color: #fff
        width: 100%
        outline: none

  .open
    // border: 2rem solid grey
    .card-header
      flex: 1 1 5%

    .card-content
      flex: 1 1 90%

    .card-footer
      flex: 1 1 5%

</style>
