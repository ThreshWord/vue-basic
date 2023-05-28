
<template>
    <h1>{{ handel }}</h1>
  
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    <BasicTable :column="column" :tableData="tableData" :handel="handel" />
    <el-link></el-link>
    <el-button @click="request">request</el-button>
    <div class="menu-demo">
      <div>
        <h3>tsx</h3>
        <Menu
          :data="mockData"
          active-text-color="red"
          default-active="1"
          :menu-options="menuOptions"/>
      </div>
  
      <div>
        <h3>sfc</h3>
        <Menu-item
          :data="mockData"
          active-text-color="red"
          default-active="1"
          :menu-options="menuOptions"/>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, getCurrentInstance } from 'vue'
  import BasicTable from "../components/BasicTable/BasicTable.vue";
  import Menu from "../components/menu/menu.vue";
  import MenuItem from "../components/menu/menuItem.vue";
  import {mockData} from "../components/menu/data";
  import { menuRequest } from "../http/interfance";
  
  const menuOptions = { title: 'title', code: 'id', icon: 'logo' }
  
  let { proxy } = getCurrentInstance()
  
  console.log(proxy.$notify);
  const request = async() => {
    const res = await menuRequest.add(1)
    console.log(res);
    
  }
  const edit = () => {
    proxy.$notify({
      title: '修改',
      message: 'This is a success message',
      type: 'success',
    })
  
  }
  const del = () => {
    proxy.$notify({
      title: '删除',
      message: 'SUCCESS',
      type: 'success',
    })
  
  }
  const handel = ref()
  handel.value = {
    fixed: 'right',
    label: '操作',
    option: [
      {
        icon: 'Edit',
        contents: '修改',
        method: () => edit()
      },
      {
        icon: 'del',
        contents: '删除',
        method: () => del()
      },
    ]
  }
  
  const column = ref()
  column.value = [
    {
      prop: 'date',
      label: '日期'
    },
    {
      prop: 'age',
      label: '年龄'
    },
    {
      prop: 'xinbie',
      label: '性别'
    },
    {
      prop: 'name',
      label: '姓名'
    }, {
      prop: 'address',
      label: 'address'
    }
  ]
  
  const tableData = ref()
  tableData.value = [
    {
      date: '2016-05-03',
      name: 'Tom',
      age: '18',
      xinbie: 'nan',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      age: '18',
      xinbie: '女',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      age: '18',
      xinbie: '未知',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      age: '18',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  
  
  </script>
  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>
  