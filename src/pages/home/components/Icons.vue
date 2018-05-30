<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" :key="page.index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
            <p class="icon-desc" v-text="item.desc"></p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: ''
      },
      iconList: [
        {
          id: '0001',
          imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/df/4b84858756848737.jpg',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
          desc: '景点门票'
        },
        {
          id: '0003',
          imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/78/8972c090e14f8337.jpg',
          desc: '景点门票'
        },
        {
          id: '0004',
          imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/df/4b84858756848737.jpg',
          desc: '景点门票'
        },
        {
          id: '0005',
          imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
          desc: '景点门票'
        },
        {
          id: '0006',
          imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/78/8972c090e14f8337.jpg',
          desc: '景点门票'
        },
        {
          id: '0007',
          imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/df/4b84858756848737.jpg',
          desc: '景点门票'
        },
        {
          id: '0008',
          imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
          desc: '景点门票'
        },
        {
          id: '0009',
          imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/78/8972c090e14f8337.jpg',
          desc: '景点门票'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
        width 100%
    .icon-desc
      position absolute
      left 0
      right 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
