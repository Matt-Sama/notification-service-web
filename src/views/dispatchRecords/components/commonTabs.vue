<template>
    <div class="tabs">
        <el-tabs type="border-card">
          <el-tab-pane label="全部">
              <common-table></common-table>
          </el-tab-pane>
          <el-tab-pane label="待发送">
              <common-table></common-table>
          </el-tab-pane>
          <el-tab-pane label="发送成功">
              <common-table></common-table>
          </el-tab-pane>
          <el-tab-pane label="发送失败">
              <common-table></common-table>
          </el-tab-pane>
          <el-tab-pane label="拦截">
              <common-table></common-table>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import CommonTable from './commonTable.vue'
    export default {
        name: 'commonTabs',
        components: {
            CommonTable,
        },
    }
</script>

<style lang="scss" scoped>
.tabs{
    height: 100%;
    .el-tabs{
        height: 100%;
        .el-tabs__content{
            height: 100%;
        }
    }
}
</style>