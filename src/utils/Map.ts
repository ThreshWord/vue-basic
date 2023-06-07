import { load } from '@amap/amap-jsapi-loader'; 
import {MAP_STYLE,MAP_KEY} from './MapKey'
let map: any = null
let AMap: any = null

export interface Option {
  zoom: number,
  center: number[],
  handel?:void
}

export const initMap = (option: Option) =>{
  load({
      key: MAP_KEY,
      version: "2.0", 
      plugins: [''],
    }).then((Amap: any)=>{
      map = new Amap.Map("container",{
        viewMode: "3D",
        zoom: option.zoom,
        mapStyle: MAP_STYLE,
        center: option.center,
      });
      map.on('complete',option.handel)
      AMap = Amap
    }).catch((e: any)=>{
      console.log(e);
  })
  return { map , AMap}
}
