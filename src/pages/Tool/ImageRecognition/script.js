import { copyToClipboard } from "src/utils";
import Tesseract from 'tesseract.js';

export default {
  name: "ImageRecognition",
  data() {
    return {
      results:'',
      file:null,
      loading:false,
      url:'',
    };
  },
  methods: {    
    copyToClipboard(text) {
      copyToClipboard(text);
      this.$q.notify({ message: "复制成功" + text, type: "positive" });
    },
    uploadImage(){
      this.url = URL.createObjectURL(this.file);
      this.results=[]
    },
    imageRecognition() {
      this.loading=true
      Tesseract.recognize(
        this.url, // 识别图片
        "eng+chi_sim",
    ).then(({ data: { text } }) => {
        this.results = text.split('\n');
        this.$q.notify({ message: '识别成功' , type: "positive" });
    })
        .catch((error) => {
        this.$q.notify({ message: error , type: "negative" });
    }).finally(()=>{
      this.loading=false
    }
    );
    },
  },
};
