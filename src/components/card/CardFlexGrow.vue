<template>
  <div class="card" v-bind:class="{ open }">
    <div class="slider-item up" v-on:click="toggle">
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
    <div class="slider-item down" v-on:click="toggle">
      TEXT
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
      // height: 10vh

    .card-content
      background: #FFBF00
      // flex: 1

    .card-footer
      display: flex
      justify-content: space-around
      background: #42b983
      // height: 10vh

      button
        font-weight: bold
        background: transparent
        border: none
        color: #fff
        width: 100%
        outline: none
</style>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}

.card .slider-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 50%;

  overflow: hidden;
  font-size: 1rem;

  /*transition: font-size 1s, flex .5s ease-out;*/
  transition: flex .3s ease-out;

  will-change: transition, font-size;
}

.card .slider-item div {
  width: 100%;
  flex: 1;
}

.card .up {
  overflow: hidden;
}

.card .down {
  background: #FFBF00;
}

.card .slider-item:first-child, .card.open .slider-item:last-child {
  flex: 1;
  font-size: 16px;

}

.card.open .slider-item:first-child, .card .slider-item:last-child {
  font-size: 0;
  flex:0
}

</style>
