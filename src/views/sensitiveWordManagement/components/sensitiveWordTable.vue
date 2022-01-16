<template>
    <div class="contain-wrapper">
        <div class="table-wrapper">
            <el-table fit height="100%">
                <el-table-column align="center" prop="" label="词汇"></el-table-column>
                <el-table-column align="center" prop="" label="状态"></el-table-column>
                <el-table-column align="center"  prop="" label="创建时间"></el-table-column>
                <el-table-column align="center"  prop="" label="操作"></el-table-column>
            </el-table>
        </div>
        <div class="contain-pagination-wrapper">
            <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.contain{
    &-wrapper{
        height: 100%;
        .el-table{
            height: 100%;
        }
        .table-wrapper{
            height: 100%;
        }
    }
    &-pagination-wrapper{
        display: flex;
        justify-content: center;
        margin: 15px 0 0 0;
    }
}
</style>