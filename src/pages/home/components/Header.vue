<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市<span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  height 0.86rem
  line-height 0.86rem
  display flex
  background $bgColor
  color #ffffff
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    padding-left 0.2rem
    margin 0.12rem 0.2rem
    height 0.64rem
    line-height 0.64rem
    flex 1
    background #ffffff
    border-radius 0.1rem
    color #cccccc
  .header-right
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      font-size 0.24rem
</style>
