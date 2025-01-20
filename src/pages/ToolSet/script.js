export default {
  name:'Toolset',
  data(){
    return{
      toolList:[
        {icon:'palette',title:'ColorConverter',describe:'颜色转换器',to:'/colorConverter'},
        {icon:'insert_photo',title:'ImageTranscoding',describe:'图片转Base64',to:'/imageTranscoding'},
        {icon:'folder_zip',title:'ImageCompression',describe:'图片压缩',to:'/imageCompression'},
        {icon:'code',title:'CodeEditor',describe:'代码编辑器',to:'/codeEditor'},
        
      ]
    }
  },
  methods:{
    goToLink(to){
      this.$router.push(this.$route.path+to);
    }
  }
}
