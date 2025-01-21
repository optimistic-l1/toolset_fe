import { copyToClipboard } from "src/utils";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';  // 引入 Snow 主题样式

export default {
  name: "RichTextEditor",
  data() {
    return {
      quill: null,  // 用于存储 Quill 实例
      editorContent: '',  // 编辑器内容
      previewContent: ''  // 预览内容
    };
  },
  mounted() {
    this.initQuill();
  },
  watch: {
    // 监听外部传入的内容变化
    editorContent(newContent) {
      if (newContent !== this.quill.root.innerHTML) {
        this.quill.root.innerHTML = newContent;
      }
    }
  },
  beforeUnmount() {
    // 组件销毁前销毁 Quill 实例
    if (this.quill) {
      this.quill.destroy();
      this.quill = null;
    }
  },
  methods: { 
    initQuill() {
      // 初始化 Quill 实例
      this.quill = new Quill(this.$refs.editor, {
        theme: 'snow',  // 使用 Snow 主题
        placeholder: '请输入内容...',
        modules: {
          toolbar: [
            // 格式化文本
            ['bold', 'italic', 'underline', 'strike'],  // 粗体、斜体、下划线、删除线
            ['blockquote', 'code-block'],  // 引用、代码块
      
            // 字体大小和颜色
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
      
            // 对齐方式
            [{ align: [] }],
      
            // 列表和缩进
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
      
            // 链接和图片
            ['link', 'image', 'video'],
      
            // 清除格式
            ['clean']
          ]
        }
      });

      // 监听内容变化
      this.quill.on('text-change', () => {
        this.editorContent = this.quill.root.innerHTML;
      });
    },
    copyToClipboard(text) {
      copyToClipboard(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
  },
};
