<template>
  <div class="main-contain">
    <header-layout>
      <template slot="header">API接口文档</template>
    </header-layout>
    <div class="card-wrapper">
      <el-card></el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLayout from '@/components/HeaderLayout'
export default {
  name: 'APIInterfaceDocument',
  components: {
    HeaderLayout,
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.card{
  &-wrapper{
    height: 100%;
    .el-card{
      height: calc(100% - 30px);
    }
  }
}
</style>
