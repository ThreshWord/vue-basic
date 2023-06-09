<template>
  <header>
    <div class="weather">
      <div class="image"></div>
      <div class=""></div>
      <div></div>
      <div></div>
    </div>
    <div class="title">{{ route.meta.title }}</div>
    <div class="selectTool">111</div>
  </header>
</template>

<script setup lang="ts">
import axios from "axios"
import { ref,Ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute() 
console.log(route);
interface Weather{
  // 温度
  temp:string,
  // 风级
  windScale:string,
  // 阴 晴 雨 
  text:string,
  // icon
  icon:string
}
interface Air {
  // pm值
  pm2p5:string
  // 空气质量
  category:string
}
const weather:Ref<Weather | undefined> = ref()
const air:Ref<Air | undefined> = ref()
const weatherUrl = 'https://devapi.qweather.com/v7/weather/now?location=106.550483,29.563707&key=9d89b5949309463583add2c09e5aee4e'
const airUrl = 'https://devapi.qweather.com/v7/air/now?location=106.550483,29.563707&key=9d89b5949309463583add2c09e5aee4e'
const weatherHandle = async() => {
      axios.get(weatherUrl).then((response) => {
          weather.value = response.data.now
        })
        axios.get(airUrl).then((response) => {
          air.value = response.data.now
        })

    }
    weatherHandle()
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 104px;
  color: #fff;
  line-height: 64px;
  background-image: url("./static/background/bg.child.head.png");
  .title{
    font-size: 36px;
  }
}
// .active{
//   background-image: url("./static/bg.head.png");
// }
</style>