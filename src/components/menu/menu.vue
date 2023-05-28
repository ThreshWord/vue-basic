<template>
    <el-menu v-bind="$attrs">
      <menu-item v-for="(item, index) in data"
                          :key="index"
                          :item="item"
                          :menu-options="options"/>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import MenuItem from './menuItem.vue'
  import { defineProps, onMounted, PropType, ref } from 'vue'
  import { defaultMenuOptions, MenuItemOptions, MenuOptions } from './types'
  
  const props = defineProps({
    data: {
      type: Array as PropType<MenuItemOptions[]>,
      required: true
    },
    menuOptions: {
      type: Object as PropType<MenuOptions>,
      required: false,
      default: () => ({})
    }
  })
  
  const options = ref({ title: 'title', code: 'id', icon: 'logo' })
  
  onMounted(() => {
    options.value = {
      ...defaultMenuOptions,
      ...props.menuOptions
    }
  })
  </script>
  
  <style scoped lang="scss">
  </style>
  