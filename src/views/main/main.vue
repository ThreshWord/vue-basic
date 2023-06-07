<template>
    <div id="container" ></div> 

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initMap, Option } from "../../utils/Map.ts";
import { mockCarData } from './mock'

const initLabelLayers = () =>{
  const layer = new AMap.LabelsLayer({
      zooms:[3,20],
      zIndex:1000,
      collision:false
    })
    map.add(layer)
    var markers = [];
    var positions = []  
    for (let i = 0; i < 1000; i++) {
      positions.push({lnglat:[Math.random() * (109 - 107) + 107,Math.random() * (30 - 28) + 28]})
    }
    var activeCar = {
      type: 'image',
      image: '/static/img/activeCar.jpg',
      size: [20, 20],
      anchor: 'bottom-center',
    };
    var offlineCar = {
      type: 'image',
      image: '/static/img/offlineCar.jpg',
      size: [20, 20],
      anchor: 'bottom-center',
    };
    for (var i = 0; i < mockCarData.length; i++) {
      let item = mockCarData[i];
      let curData = {
          position: [item.lng,item.lat],
          icon:item.carState ? activeCar: offlineCar,
          extData: {...item}
      };
      let labelMarker = new AMap.LabelMarker(curData);
      markers.push(labelMarker);
    }
    // 一次性将海量点添加到图层
    layer.add(markers);
}
const option: Option={
  zoom:5,
  center:[107,32],
  // handel:initLabelLayers()
}
const { map,AMap } =  initMap(option)



</script>

<style lang="scss">
#container{
  margin: auto;
  width: 99vw;
  height: 99vh;
}
</style>