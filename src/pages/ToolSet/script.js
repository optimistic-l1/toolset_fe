export default {
  name:'Toolset',
  data(){
    return{
      toolList:[
        {icon:'palette',title:'ColorConverter',describe:'颜色转换器',to:'/colorConverter'},
        {icon:'insert_photo',title:'ImageTranscoding',describe:'图片转Base64',to:'/imageTranscoding'},
        {icon:'folder_zip',title:'ImageCompression',describe:'图片压缩',to:'/imageCompression'},
        {icon:'code',title:'CodeEditor',describe:'代码编辑器',to:'/codeEditor'},
        {icon:'data_object',title:'JsonConverter',describe:'JSON转换器',to:'/jsonConverter'},
        {icon:'terminal',title:'RichTextEditor',describe:'富文本编辑器',to:'/richTextEditor'},
       
      ]
    }
  },
  methods:{
    goToLink(to){
      this.$router.push(this.$route.path+to);
    }
  }
}
