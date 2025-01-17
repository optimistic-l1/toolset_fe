export default {
  name:'ImageTranscoding',
  data(){
    return {
      file:null,
      text:'',
    }
  },
    methods:{
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
          this.text=e.target.result
        };
      },

      //点击复制
    async copyToClipboard(text) {
      var copyipt = document.createElement("input");
      copyipt.setAttribute("value", text);
      document.body.appendChild(copyipt);
      copyipt.select();
      document.execCommand("copy");
      document.body.removeChild(copyipt);
      this.$q.notify({ message: '复制成功'+text, type: 'positive' })
    },
    },
}
