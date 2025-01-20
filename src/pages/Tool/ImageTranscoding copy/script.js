import { copyToClipboard } from "src/utils";

export default {
  name: "ImageTranscoding",
  data() {
    return {};
  },
  methods: {    
    copyToClipboard(text) {
      copyToClipboard(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
  },
};
