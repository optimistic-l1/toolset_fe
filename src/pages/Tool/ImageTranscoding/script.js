import { copyToClipboard } from "src/utils";

export default {
  name: "ImageTranscoding",
  data() {
    return {
      file: null,
      text: "",
    };
  },
  methods: {
    readAsDataURL() {
      if (!this.file) {
        alert("请先选择文件");
        return false;
      }
      if (!/image\/\w+/.test(this.file.type)) {
        alert("请确保文件为图像文件");
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        this.text = e.target.result;
      };
    },

    copyToClipboard(text) {
      copyToClipboard(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
  },
};
