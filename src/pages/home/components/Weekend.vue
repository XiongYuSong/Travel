<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-desc" v-text="item.desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend-title
  line-height 0.8rem
  background #eeeeee
  text-indent 0.2rem
.item-img-wrapper
  height 0
  overflow hidden
  padding-bottom 33.9%
.item-img
  width 100%
  height 158px
.item-info
  padding 0.1rem
.item-title
  line-height 0.54rem
  font-size 0.32rem
  ellipsis()
.item-desc
  line-height 0.4rem
  color #cccccc
  ellipsis()
</style>
