<template>
    <div class="contain">
        <div class="contain-form-wrapper">
            <el-form ref="messageForm" v-model="messageForm">
                <el-form-item label="词汇 ">
                    <el-input size="small"></el-input>
                </el-form-item>
                <el-form-item size="small" label="状态">
                    <el-select style="width:100%">
                        <el-option label="启用"></el-option>
                        <el-option label="停用"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" :rows="5"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="contain-button-wrapper">
            <el-button class="commonButton">保存</el-button>
            <el-button>取消</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messageForm: {

                },
                checkboxGroup: []
            }
        },
    }
</script>

<style lang="scss" scoped>
.contain{
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    &-form-wrapper{
        height: 100%;
    }
    &-button-wrapper{
        display: flex;
        justify-content: center;
    }
}
</style>