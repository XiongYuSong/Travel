<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=415293130,2419074865&fm=27&gp=0.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题公园'
        },
        {
          id: '0002',
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=415293130,2419074865&fm=27&gp=0.jpg',
          title: '2222222222',
          desc: '222222222222222222222222222222'
        },
        {
          id: '0003',
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=415293130,2419074865&fm=27&gp=0.jpg',
          title: '3333333333',
          desc: '333333333333333333333333333333'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend-title
  margin-top 0.2rem
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
