
<template>
  <div class="header">
      1111111
  </div>
  <div class="main">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { ref, getCurrentInstance } from 'vue'
// import { menuRequest } from "../http/interfance";
// const menuList = ['首页', '教学管理', '教科管理', '智慧办公', '学生管理', '系统设置']


</script>
<style scoped lang="scss">
.header,
.main {
  padding: 10px 30px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  background-color: rgb(8, 8, 8);

  .header_title {
    // width: 20%;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  .header_nav {
    display: flex;

    .nav_item {
      // width: 120px;
      position: relative;
      bottom: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      height: 60px;
      margin-right: 10px;
      background-color: #f39800;
    }

    .nav_item:hover {
      cursor: pointer;
      box-shadow: 1px 1px 10px #fff;
    }
  }
}
</style>
