<template>
    <div class="contain">
        <div class="contain-option-wrapper">
            <el-input size="small" :placeholder="placeholder" suffix-icon="el-icon-search"></el-input>
            <el-select v-model="status" size="small">
                <el-option label="全部状态" :value="0"></el-option>
                <el-option label="启用" :value="1"></el-option>
                <el-option label="停用" :value="2"></el-option>
            </el-select>
        </div>
        <div class="contain-table-wrapper">
            <el-table fit height="100%">
                <el-table-column align="center" prop="" label="模板ID"></el-table-column>
                <el-table-column align="center" prop="" label="模板名称"></el-table-column>
                <el-table-column align="center"  prop="" label="状态"></el-table-column>
                <el-table-column align="center"  prop="" label="消息内容"></el-table-column>
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
        props: {
            placeholder: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                status: 0,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contain{
        height: 100%;
        &-option-wrapper{
            display: flex;
            margin-bottom: 10px;
            .el-input{
                width: 400px;
                margin-right: 10px;
            }
        }
        &-table-wrapper{
            height: calc(100% - 90px);
        }
        &-pagination-wrapper{
            margin-top: 10px;
            display: flex;
            justify-content: center;
        }
    }
</style>