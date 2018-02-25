<template>
  <div id="app">
    <app-header></app-header>

    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

    <app-footer>
      <card-slider-nav slot="footer"></card-slider-nav>
    </app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import CardSliderNav from './components/CardSliderNav.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter,
      CardSliderNav
    },

    computed: {
      page () {
        return this.$store.state.page
      }
    },

    methods: {
      ...mapActions([
        'navigate' // map `this.increment()` to `this.$store.dispatch('increment')`
      ])
    }
  }
</script>

<style lang="sass">
  #app
    background: #98C2C2
    background-image: linear-gradient(to top, #98C2C2 25%, #98C2C2 50%, #50A7C2 75%, #50A7C2 100%)

    display: flex
    flex-flow: column
    height: 100%
    // display: flex
    // flex-direction: column
    // align-items: space-around
    // justify-content: space-around
    // flex: 1
    // align-self: stretch
    flex-basis: fill
    flex-wrap: wrap
    background: #607d8a

    perspective: 1000px

  header
    background: #607d8a
    height: 5vh
    line-height: 5vh

  main
    text-align: center
    flex: 1
    background: #607d8a

  footer
    background: #607d8a
    height: 5vh

    li
      cursor: pointer
      color: #fff
      opacity: 0.5

      &.active
        background: #42b983
        opacity: 1

      &:hover
        opacity: 1

  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .25s

  .fade-enter-active
    transition-delay: .25s


  .fade-enter, .fade-leave-active
    opacity: 0


    // align-self: stretch



</style>
