<template>
  <div class="dashboard-container">
    <header-layout>
      <template slot="header">授权管理</template>
    </header-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLayout from '@/components/HeaderLayout'
export default {
  name: 'authorizationManagement',
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
