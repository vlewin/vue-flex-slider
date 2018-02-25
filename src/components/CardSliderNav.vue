<template>
  <ul slot="footer">
    <li v-on:click="navigate(0)" v-bind:class="{ active: page === 0 }"></li>
    <li v-on:click="navigate(1)" v-bind:class="{ active: page === 1 }"></li>
    <li v-on:click="navigate(2)" v-bind:class="{ active: page === 2 }"></li>
    <li v-on:click="navigate(3)" v-bind:class="{ active: page === 3 }"></li>
    <li v-on:click="navigate(4)" v-bind:class="{ active: page === 4 }"></li>
  </ul>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'CardSliderNav',
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
