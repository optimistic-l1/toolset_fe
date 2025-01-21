import { copyToClipboard } from "src/utils";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";

export default {
  name: "JsonConverter",
  data() {
    return {
      jsonData: {
        name: "John Doe",
        age: 30,
        address: {
          street: "123 Main St",
          city: "Anytown",
          zip: "12345"
        },
        hobbies: ["reading", "coding", "traveling"]
      },
      editor: null,
    };
  },
  mounted() {
    this.initEditor();
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy(); // 销毁编辑器实例
    }
  },
  methods: {
    initEditor() {
      // 获取 DOM 元素
      const container = this.$refs.editorContainer;

      // 初始化 JSONEditor
      this.editor = new JSONEditor(container, {
        mode: "code", // 可选模式：'tree', 'code', 'form', 'text', 'view', 'preview'
        modes: ["tree", "code", "form", "text", "view"], // 允许切换的模式
        onChange: () => {
          // 监听 JSON 数据变化
          this.jsonData = this.editor.get();
        },
      });

      // 设置初始 JSON 数据
      this.editor.set(this.jsonData);
    },
    logJson() {
      console.log("Current JSON:", JSON.parse(JSON.stringify(this.jsonData)));
    },
    copyToClipboard(text) {
      copyToClipboard(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
  },
};

