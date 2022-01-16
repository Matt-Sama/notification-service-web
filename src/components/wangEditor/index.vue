<template>
    <div style="border: 1px solid #ccc;">
        <!-- 工具栏 -->
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editorId="editorId"
            :defaultConfig="toolbarConfig"
        />
        <!-- 编辑器 -->
        <Editor
            style="height: 150px"
            :editorId="editorId"
            :defaultConfig="editorConfig"
            :defaultContent="getDefaultContent"
            @onChange="onChange"
        />
    </div>
</template>

<script>
import { Editor, Toolbar, getEditor, removeEditor } from '@wangeditor/editor-for-vue'
import cloneDeep from 'lodash.clonedeep'
import { color } from 'echarts/core'

export default {
    name: 'wangEditor',
    components: { Editor, Toolbar },
    data() {
        return {
            editorId: 'wangEditor-1', // 定义一个编辑器 id ，要求：全局唯一且不变。重要！！！
            defaultContent: [], // 编辑器的默认内容，只在初始化时使用
            latestContent: [], // 用于存储编辑器最新的内容，onChange 时修改
            toolbarConfig: {
                toolbarKeys: [
                    'bold',
                    '|',
                    'italic',
                    {
                        key: 'group-more-style', // 必填，要以 group 开头
                        title: '更多样式', // 必填
                        iconSvg: '<svg>....</svg>', // 可选
                        menuKeys: ["through", "code", "clearStyle"] // 下级菜单 key ，必填
                    },
                    'color',
                    'insertLink',
                    'editLink',
                    'fontSize',
                    'fontFamily',
                ]
            },
            editorConfig: {
                placeholder: '请输入内容...',
            }
        }
    },
    computed: {
        getDefaultContent() {
            return cloneDeep(this.defaultContent) // 深拷贝，重要！！！
        }
    },
    methods: {
        onChange(editor) {
            console.log('onChange', editor.children) // onChange 时获取编辑器最新内容
            this.latestContent = editor.children
        },
    },
    mounted(){
        this.$nextTick(() => {
            const editor = getEditor(this.editorId)
        console.log(editor,'ssss');
        })
        
    },
    beforeDestroy() {
        const editor = getEditor(this.editorId)
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器 ，重要！！！
        removeEditor(this.editorId)
    },
}
</script>

<!-- 记得引入 wangEditor css 文件，重要 ！！！ -->
<style src="@wangeditor/editor/dist/css/style.css"></style>
