<template>
  <div class="main-contain">
    <header-layout>
      <template slot="header">发送记录</template>
    </header-layout>
    <div class="option-wrapper">
      <div class="option-operator">
        <el-select size="small">
          <el-option label="全部"></el-option>
          <el-option label="天庆空分智慧平台"></el-option>
          <el-option label="兴澄特钢智慧平台"></el-option>
        </el-select>
        <span class="commonTitle">统计时段：</span>
        <el-select class="option-hour-select" size="small">
          <el-option label="小时"></el-option>
        </el-select>
        <span class="commonTitle">时间范围：</span>
        <el-date-picker type="datetimerange" range-separator="~" start-placeholder="开始时间" end-placeholder="结束时间" size="small"></el-date-picker>
      </div>
    </div>
    
    <div class="card-wrapper">
      <el-card>
          <v-chart :autoresize="true" :option="option"></v-chart>
      </el-card>
      <el-card>
        <el-tabs>
          <el-tab-pane label="短信">
            <common-tabs></common-tabs>
          </el-tab-pane>
          <el-tab-pane label="邮件">
            <common-tabs></common-tabs>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLayout from '@/components/HeaderLayout'
import trendOption from '@/charts/dispatchRecords/trend-echart'
import CommonTabs from './components/commonTabs.vue'
export default {
  name: 'dispatchRecords',
  components: {
    HeaderLayout,
    CommonTabs
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      option : trendOption
    }
  },
}
</script>

<style lang="scss" scoped>

.option{
  &-wrapper{
    height: 40px;
    display: flex;
    justify-content: flex-end;
  }
  &-operator{
    margin-top: -10px;
    display: flex;
    align-items: center;
  }
  &-hour-select{
    margin-right: 5px;
  }
}
.card{
  &-wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 30px;
    .el-card{
      height:50%;
      &:first-child(1){
        margin-bottom: 15px;
      }
      &:nth-child(2){
        margin-top:15px;
        margin-bottom: 80px;
        ::v-deep .el-tabs__content{
          height: calc(100% - 50px);
          .el-tab-pane{
            height: 100%;
          }
        }
      }
      ::v-deep .el-card__body{
        height: 100%;
      }
      .el-tabs{
        height: 100%;
      }
    }
  }
}
</style>
