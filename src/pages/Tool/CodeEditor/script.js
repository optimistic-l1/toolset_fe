import { copyToClipboard } from "src/utils";
import MonacoEditor from "./MonacoEditor.vue";

export default {
  name: "CodeEditor",
  components: {
    MonacoEditor
},
  data() {
    return {
     
    };
  },
  computed: {
  },
  methods: {
    copyToClipboard(text) {
      copyToClipboard(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
    
  },

};
