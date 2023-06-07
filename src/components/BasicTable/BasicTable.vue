<template>
    <el-table :data="props.tableData" style="width: 100%">
    <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-for="item in props.column" :key="item.prop">
    </el-table-column>
    <el-table-column :fixed="props.handel.fixed || false" :label="props.handel.label" :width="props.handel.width|| 120">
      <template #default>
        <el-tooltip
          class="box-item"
          v-for="item in props.handel.option"
          effect="dark"
          :content="item.contents"
          :key="item.icon"
          placement="top"
        >
        <el-link  @click="item.method" :disabled="item.disabled">
          {{ item.contents }}
        </el-link>
      </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref,defineProps,defineEmits } from "vue";
import {HandleOption,Column} from './interface'

interface Props {
    handel:HandleOption,
    column:Column[],
    tableData:any
}
const props = defineProps<Props>()

// const emit = defineEmits(['change', 'update'])
</script>