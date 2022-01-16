<template>
  <div class="main-contain">
    <header-layout>
      <template slot="header">通知模板</template>
    </header-layout>
    <div class="main-body">
     <el-card>
       <el-button class="main-button" @click="handleDrawer">新增</el-button>
        <el-tabs type="border-card">
          <el-tab-pane label="短信">
            <template-table :placeholder="'可输入模板ID、模板名称、消息内容等关键字查询'"></template-table>
          </el-tab-pane>
          <el-tab-pane label="邮件">
            <template-table :placeholder="'可输入模板ID、模板名称、主题等关键字查询'"></template-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>

      <el-drawer
            :visible.sync="drawer"
            title="新增通知模板"
            direction="rtl"
        >
            <el-tabs>
              <el-tab-pane label="短信">
                <drawer-message></drawer-message>
              </el-tab-pane>
              <el-tab-pane label="邮件">
                <drawer-email></drawer-email>
              </el-tab-pane>
            </el-tabs>
      </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLayout from '@/components/HeaderLayout'
import TemplateTable from './components/tmeplateTable'
import DrawerMessage from './components/drawerMessage'
import DrawerEmail from './components/drawerEmail'
export default {
  name: 'notificationTemplate',
  components: {
    HeaderLayout,
    TemplateTable,
    DrawerMessage,
    DrawerEmail
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    handleDrawer() {
      this.drawer = true
    }
  },
}
</script>

<style lang="scss" scoped>
.main{
  &-body{
    height: calc(100% - 30px);
    .el-card{
      height: 100%;
      ::v-deep .el-card__body{
        position: relative;
        height: 100%;
      }
      .el-tabs{
        height: 100%;
        ::v-deep .el-tabs__content{
          height: calc(100% - 30px);
        }
      }
      ::v-deep .el-tab-pane{
        height: 100%;
      }
    }
  }
  &-button{
    position:absolute;
    top:20px;
    right:20px;
    z-index: 99;
  }
}
::v-deep .el-drawer__header{
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #DCDFE6;
  padding-bottom: 10px;
  span{
      white-space: nowrap;
      font-size: 16px;
      font-weight: 700;
  }
}
::v-deep .el-drawer__body{
  margin:0 30px 30px 30px
}
</style>
