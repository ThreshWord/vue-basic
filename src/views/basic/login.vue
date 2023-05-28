<template>
  <div class="header">
    111
  </div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
// import type { FormInstance, FormRules } from 'element-plus'
// import { ElNotification } from 'element-plus'
// import md5 from 'js-md5'
// // import commonUtil from '../utils/commonUtil'
// import { useRouter } from 'vue-router'
// const ruleForm = reactive({
//   userName: '',
//   passWord: ''
// })
// const router = useRouter()
// const submitForm = () => {
//   // console.log(password);
//   localStorage.setItem('token', md5(ruleForm.passWord))
//   ElNotification({
//     title: 'Success',
//     message: `登录成功密钥：${md5(ruleForm.passWord)}`,
//     type: 'success'
//   })
//   router.push('/')
// }

</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 80px 120px;
  height: 10vh;
  font-size: 30px;
  font-weight: bold;

  .header_left {
    display: flex;
    align-items: center;

    .schoolName {
      margin-left: 20px;
    }

    .system {
      position: relative;
      margin-left: 40px;
      font-size: 18px;
      font-weight: normal;

      &::before {
        position: absolute;
        content: '';
        width: 1px;
        height: 30px;
        left: -20px;
        background-color: black;
      }
    }

    :deep(.el-image) {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70vh;
  // border: 1px solid black;
  box-shadow: 1px 1px 20px 0px #000;
  overflow: hidden;

  .content_left {
    flex: 5;

    :deep(.el-image) {
      width: 100%;
      height: 100%;

    }
  }

  .content_right {
    flex: 2;

    .login_box {
      padding: 0px 140px;
    }

    .tab_content {
      width: 100%;
      height: 200px;
      // background-color: aqua;
      box-shadow: 1px 1px 20px 0px #000;

      .forgetPwd {
        cursor: pointer;
        width: 100%;
        // align-content: flex-end;
        text-align: right;
        color: blue($color: #000000);
      }
    }
  }

  .LoginTitle {
    width: 100%;
    // text-align: center;
    padding-left: 20px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}

:deep(.el-tabs__nav) {
  width: 100%;
}

:deep(.el-tabs__item) {
  flex: 1;
}</style>
