<template>
  <div class="main-contain">
    <header-layout>
      <template slot="header">授权管理</template>
    </header-layout>
    <div class="card-wrapper">
      <div class="option-wrapper">
        <el-card>
          <div class="option-header">
            <div class="keyword-wrapper">
              <span class="commonTitle">关键字：</span>
              <el-input size="small" placeholder="可输入授权应用等关键字查询"></el-input>
            </div>
            <div class="date-time">
              <span class="commonTitle">创建时间：</span>
              <el-date-picker type="datetimerange" range-separator="~" start-placeholder="开始时间" end-placeholder="结束时间" size="small"></el-date-picker>
            </div>
          </div>
          <div class="button-wrapper">
            <el-button>重置</el-button>
            <el-button class="commonButton">查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="table-wrapper">
        <el-card>
          <el-button class="main-button" @click="handleDrawer">新增</el-button>
          <el-tabs type="border-card">
          <el-tab-pane label="全部">
              <authorization-table></authorization-table>
          </el-tab-pane>
          <el-tab-pane label="启用">
              <authorization-table></authorization-table>
          </el-tab-pane>
          <el-tab-pane label="停用">
              <authorization-table></authorization-table>
          </el-tab-pane>
        </el-tabs>
        </el-card>
      </div>
    </div>
    <el-drawer
          :visible.sync="drawer"
          title="新增授权"
          direction="rtl"
        >
        <authorization-drawer></authorization-drawer>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLayout from '@/components/HeaderLayout'
import AuthorizationTable from './components/authorizationTable'
import AuthorizationDrawer from './components/authorizationDrawer'
export default {
  name: 'authorizationManagement',
  data() {
    return {
      drawer: false
    }
  },
  components: {
    HeaderLayout,
    AuthorizationTable,
    AuthorizationDrawer
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleDrawer() {
      this.drawer = true
    }
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
  .option{
    &-wrapper{
      flex-basis: 100px;
      display: flex;
      flex-direction: column;
      .el-card{
        height: 100%;
      }
      .button-wrapper{
        display: flex;
        justify-content: flex-end;
      }
    }
    &-header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      .keyword-wrapper{
        display: flex;
        span{
          display: flex;
          align-items: center;
        }
        .el-input{
          width: 600px;
        }
      }
      .date-time{
        display: flex;
        span{
          display: flex;
          align-items: center;
        }
      }
    } 
  }
  .table-wrapper{
    flex: 1;
    margin: 15px 0 30px 0;
    .el-card{
      height: 100%;
      ::v-deep .el-card__body{
        height: 100%;
        position: relative;
      }
      .el-tabs{
        height: 100%;
        ::v-deep .el-tabs__content{
          height: calc(100% - 38px);
        }
      }
      ::v-deep .el-tab-pane{
        height: calc(100vh - 440px)
      }
    }
    .main-button{
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 99;
    }
  }
}
</style>
