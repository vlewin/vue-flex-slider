<template>
  <footer class="center">
    <slot name="footer">DEFAULT FOOTER</slot>
  </footer>
</template>

<style lang="sass">
  footer
    ul
      height: 100%
      vertical-align: middle
      margin: 0
      display: flex
      justify-content: center
      align-items: center
    li
      display: inline-block
      background: #fff
      width: 1rem
      height: 1rem
      line-height: 1rem
      font-size: 50%
      text-align: center
      outline: none
      border-radius: 50%
</style>
