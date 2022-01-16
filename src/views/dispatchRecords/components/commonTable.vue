<template>
    <div class="contain">
        <div class="contain-table-wrapper">
            <el-table fit height="100%">
                <el-table-column align="center" prop="" label="应用发送时间"></el-table-column>
                <el-table-column align="center" prop="" label="接受时间"></el-table-column>
                <el-table-column align="center"  prop="" label="发送时间"></el-table-column>
                <el-table-column align="center"  prop="" label="回调时间"></el-table-column>
                <el-table-column align="center"  prop="" label="应用"></el-table-column>
                <el-table-column align="center"  prop="" label="服务商"></el-table-column>
                <el-table-column align="center"  prop="" label="联系方式"></el-table-column>
                <el-table-column align="center"  prop="" label="条数"></el-table-column>
                <el-table-column align="center"  prop="" label="发送状态"></el-table-column>
                <el-table-column align="center"  prop="" label="内容"></el-table-column>
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
        height: 100%;
        &-table-wrapper{
            margin: 5px 0 0 0;
            height: calc(100% - 30px);
        }
        &-pagination-wrapper{
            margin-top: 10px;
            display: flex;
            justify-content: center;
        }
    }
</style>