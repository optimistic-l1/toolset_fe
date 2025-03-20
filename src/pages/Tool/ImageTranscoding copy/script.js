import { copyText } from "src/utils";

export default {
  name: "ImageTranscoding",
  data() {
    return {};
  },
  methods: {    
    copyToClipboard(text) {
      copyText(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
  },
};
