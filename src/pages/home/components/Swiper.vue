<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: '0001',
          imgUrl:
            'https://img1.qunarzz.com/travel/poi/1805/df/4b84858756848737.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'https://img1.qunarzz.com/travel/poi/1805/78/8972c090e14f8337.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 31.25%
  background #ffffff
  .swiper-img
    width 100%
    height 31.25vw
  .swiper-pagination-bullet-active
    background red !important
</style>
