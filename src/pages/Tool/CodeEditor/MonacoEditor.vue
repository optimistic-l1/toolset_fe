<template>
    <div>
        <div class="flex items-center">
            <p>Language：</p>
            <q-select class="q-mb-md select-container" outlined v-model="language" :options="options">
                <template v-slot:prepend>
                    <q-icon name="code" />
                </template>
            </q-select>
        </div>
        <div ref="container" class="editor-container q-mb-md"></div>
        <div v-if="language==='html'">
            <p>渲染区：</p>
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
import * as monaco from "monaco-editor";

export default {
    name: "MonacoEditor",
    data() {
        return {
            editor: null,
            value: "function x() {\n\tconsole.log('Hello world!');\n}",
            language: "javascript",
            content:'',
            options: [
                "javascript",
                "typescript",
                "markdown",
                "html",
                "css",
                "scss",
                "less",
                "python",
                "go",
                "php",
                "sql",
                "xml",
                "shell",
                "yaml",
                "java",
                "mysql",
            ],
        };
    },
    watch: {
        // 监听语言变化并更新编辑器
        language(newLanguage) {
            this.updateLanguage(newLanguage);
        },
        // 监听内容变化并更新编辑器
        value(newContent) {
            if (this.editor) {
                this.editor.setValue(newContent);
            }
        },
    },
    mounted() {
        this.initEditor();
    },
    methods: {
        initEditor() {
            this.editor = monaco.editor.create(this.$refs.container, {
                value: this.value,
                language: this.language,
                theme: "vs-dark", // 可选主题：vs, vs-dark, hc-black
                foldingStrategy: "indentation", // 代码可分小段折叠
                overviewRulerBorder: false, // 不要滚动条的边框
                lineNumbers: "off", // 控制行号的出现on | off
                scrollbar: {
                    // 滚动条设置
                    verticalScrollbarSize: 4, // 竖滚动条
                    horizontalScrollbarSize: 6, // 横滚动条
                },
                readOnly: false, // 是否只读 Defaults to false | true
                minimap: {
                    // 关闭小地图
                    enabled: false,
                },
                cursorStyle: "line", // 光标样式
                automaticLayout: false, // 自动布局
                fontSize: 14, // 字体大小
                tabSize: 2, // tab缩进长度
                autoIndent: true, // 自动布局
            });

            // 监听编辑器内容变化
            this.editor.onDidChangeModelContent(() => {
                const currentValue = this.editor.getValue();
                this.content=currentValue
            });
        },
        updateLanguage(newLanguage) {
            if (this.editor) {
                // 设置新的语言模式
                monaco.editor.setModelLanguage(this.editor.getModel(), newLanguage);
            }
        },
    },
    beforeDestroy() {
        if (this.editor) {
            this.editor.dispose(); // 销毁编辑器实例
        }
    },
};
</script>

<style scoped>
.editor-container {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
</style>
