export default {
  name:'Toolset',
  data(){
    return{
      toolList:[
        {icon:'palette',title:'ColorConverter',describe:'颜色转换器',to:'/colorConverter'},
      ]
    }
  },
  methods:{
    goToLink(to){
      this.$router.push(this.$route.path+to);
    }
  }
}
