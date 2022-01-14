<template>
  <div class="dashboard-container">
    <header-layout>
      <template slot="header">API接口文档</template>
    </header-layout>
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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
