import { CodeDiff } from 'v-code-diff'

export default {
  name: "TextDiff",
  components:{CodeDiff},
  data() {
    return {
      oldText:"",
      newText:"",
    };
  },
  methods: {    
  },
};
