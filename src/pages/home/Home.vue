<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
