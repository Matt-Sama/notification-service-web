<template>
    <div class="contain">
        <div class="contain-form-wrapper">
            <el-form ref="messageForm" v-model="messageForm">
                <el-form-item label="模板ID">
                    <el-input disabled size="small"></el-input>
                </el-form-item>
                <el-form-item size="small" label="模板名称">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item size="small" label="状态">
                    <el-select style="width:100%">
                        <el-option label="启用"></el-option>
                        <el-option label="停用"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主题">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <br>
                    <wang-editor></wang-editor>
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
import WangEditor from '@/components/wangEditor'
    export default {
        components: {
            WangEditor,
        },
        data() {
            return {
                messageForm: {

                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.contain{
    height: calc(100vh - 200px);
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