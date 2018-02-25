<template>
  <div class="card" v-bind:class="{ fliped }">
    <div class="flipper" v-on:click="toggle">
      <div class="front">
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
      <div class="back" v-on:click="toggle">
        BACK

        <button v-on:click="toggle">BACK</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FlipCard',
    data () {
      return {
        fliped: false
      }
    },

    methods: {
      toggle () {
        this.fliped = !this.fliped
      }
    }
  }
</script>

<style lang="sass" scoped>
  .card
    display: flex
    flex-direction: column
    height: 100%

    &.fliped
      background: #fff

    .card-header
      background: tomato
      // height: 10vh

    .card-content
      background: #FFBF00
      flex: 1

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

<style>
.card {
	perspective: 5000px;
}
	/* flip the pane when hovered */
	.card.fliped .flipper {
		transform: rotateY(180deg);
	}

.card, .front, .back {
	width: 100%;
	height: 100%;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;

  width: 100%;
  height: 100%;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
	transform: rotateY(180deg);
  background: orange;
}


/*
.card {
	position: relative;
}

	.back {
		transform: rotateX(180deg);
	}

	.card.fliped .flipper {
		transform-origin: 50vh;
	}

	.card.fliped .flipper {
		transform: rotateX(-180deg);
	}*/
</style>
