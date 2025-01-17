export default {
  name:'Toolset',
  data(){
    return{
      toolList:[
        {icon:'palette',title:'ColorConverter',describe:'颜色转换器',to:'/colorConverter'},
        {icon:'insert_photo',title:'ImageTranscoding',describe:'图片转Base64',to:'/imageTranscoding'},
      ]
    }
  },
  methods:{
    goToLink(to){
      this.$router.push(this.$route.path+to);
    }
  }
}
