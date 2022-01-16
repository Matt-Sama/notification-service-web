<template>
    <div class="contain">
        <div class="contain-form-wrapper">
            <el-form ref="messageForm" v-model="messageForm">
                <el-form-item label="授权应用">
                    <el-input placeholder="请填写应用授权名称" size="small"></el-input>
                </el-form-item>
                <el-form-item size="small" label="应用AppKey">
                    <el-input disabled>
                        <el-button slot="append" class="commonButton">复制</el-button>
                    </el-input>
                </el-form-item>
                <el-form-item size="small" label="应用Master Secret">
                    <el-input disabled>
                        <el-button slot="append" class="commonButton">复制</el-button>
                    </el-input>
                </el-form-item>
                <el-form-item size="small" label="状态">
                    <el-select style="width:100%">
                        <el-option label="启用"></el-option>
                        <el-option label="停用"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item size="small" label="授权有效期">
                    <br>
                    <div style="display: flex">
                        <el-radio style="display:flex;align-items:center">永久</el-radio>
                        <el-date-picker type="datetimerange" range-separator="~" start-placeholder="开始时间" end-placeholder="结束时间" size="small"></el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item size="small" label="授权范围">
                    <br>
                    <el-checkbox-group v-model="checkboxGroup">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <el-checkbox>短信</el-checkbox>
                        <el-checkbox>邮件</el-checkbox>
                        <el-checkbox>钉钉</el-checkbox>
                        <el-checkbox>微信</el-checkbox>
                    </el-checkbox-group>
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