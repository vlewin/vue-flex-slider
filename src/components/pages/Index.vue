<template>
  <div class="page">
    <card-slider>
      <card-flex-grow slot="0">
        <div class="card-header" slot="header">HEAD1 </div>
        <div class="card-content" slot="content">MAIN1</div>
        <div class="card-footer" slot="footer">
          <router-link to="settings">Settings</router-link>
        </div>
      </card-flex-grow>

      <card-with-slider slot="1">
        <div class="card-header" slot="header">CARD WITH SLIDER</div>
        <div class="card-content" slot="content">CARD WITH SLIDER - CONTENT</div>
        <div class="card-footer" slot="footer">
          <button>SAVE</button>
          <button>ABSENCE</button>
        </div>
      </card-with-slider>

      <card slot="2">
        <div class="card-header" slot="header">
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
        </div>
        <div class="card-content" slot="content">
          MAIN
        </div>
        <div class="card-footer" slot="footer">
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <p>Multi line</p>
          <router-link to="settings">Settings</router-link>
        </div>
      </card>

      <card-with-reveal slot="3">
        <div class="card-header" slot="header">
          <div>TOP</div>
          <div>Multi line</div>
          <div>Multi line</div>
          <div>Multi line</div>
        </div>
        <div class="card-content" slot="content">MIDDLE</div>
        <div class="card-footer" slot="footer">
          <div>BUTTOM</div>
          <div>Multi line</div>
          <div>Multi line</div>
          <div>Multi line</div>
          <router-link to="settings">Settings</router-link>
        </div>
      </card-with-reveal>

      <flip-card slot="4">
        <div class="card-header" slot="header">
          <div>TOP</div>
          <div>Multi line</div>
          <div>Multi line</div>
          <div>Multi line</div>
        </div>
        <div class="card-content" slot="content">MIDDLE</div>
        <div class="card-footer" slot="footer">
          <div>BUTTOM</div>
          <div>Multi line</div>
          <div>Multi line</div>
          <div>Multi line</div>
          <router-link to="settings">Settings</router-link>
        </div>
      </flip-card>
    </card-slider>
  </div>
</template>

<script>
import CardSlider from '../CardSlider.vue'

import Card from '../card/Card.vue'
import CardFlexGrow from '../card/CardFlexGrow.vue'
import CardWithSlider from '../card/CardWithSlider.vue'
import CardWithReveal from '../card/CardWithReveal.vue'
import FlipCard from '../card/FlipCard.vue'

export default {
  name: 'Index',
  components: {
    CardSlider,
    Card,
    CardWithSlider,
    CardFlexGrow,
    CardWithReveal,
    FlipCard
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.page {
  display: flex;
  height: 90vh;
}
</style>
