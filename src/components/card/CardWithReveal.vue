<template>
  <div class="card" v-bind:class="{ open: open }" v-on:click="toggle">
    <div class="body">
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
    <div class="reveal">
      reveal
    </div>
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

<style lang="sass" scroped>
  .card
    display: flex
    flex-direction: column
    width: 100%
    height: 100%

    .body
      flex: 1
      display: flex
      flex-direction: column
      overflow: hidden

    .reveal
      transition: flex 0.5s
      background: red
      flex: 0
      overflow: hidden


    .card-header, .card-content, .card-footer
      height: calc(100% / 3)
      overflow: visible

    .card-header
      background: tomato

    .card-content
      background: #42b983

    .card-footer
      background: orange

  .open
    // border: 2rem solid grey
    .body
      flex: 1 1 0

    .reveal
      flex: 1 80%

</style>
