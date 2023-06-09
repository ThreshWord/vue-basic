<template>
  <Header />
  <div class="map-page-container">
    <el-amap
      :center="center"
      :zoom="zoom"
      @init="init"
      :mapStyle="MAP_STYLE"
    />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/header/header.vue'
import {ref} from "vue";
import { MAP_STYLE } from '../../utils/MapKey'
const zoom = ref(12);
const center = ref([121.59996, 31.197646]);
let map:any = null;
const init = (e:any) => {
  const marker = new AMap.Marker({
    position: [121.59996, 31.197646]
  });
  e.add(marker);
  map = e;
  console.log('map init: ', map)
}
</script>

<style>
.map-page-container{
  width: 100%;
  height: 98vh;
}
</style>