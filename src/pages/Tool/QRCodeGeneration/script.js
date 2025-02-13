import { copyToClipboard } from "src/utils";
import QRCode from 'qrcodejs2';

export default {
  name: "QRCodeGeneration",
  data() {
    return {
      text: 'https://example.com', // 二维码内容
      parameter:{
        text:'https://example.com',
        width: 128,
        height: 128,
        colorDark: '#000000', // 二维码颜色
      },
      loading:false,
      list:[],
    };
  },
  methods: {   
    generateQRCode() {
      this.loading=true
      // 清空二维码容器
      const container = document.createElement('div');
      // 使用 qrcodejs2 生成二维码
      new QRCode(container, {
        text: this.parameter.text,
        width: this.parameter.width,
        height: this.parameter.height,
        colorDark: this.parameter.colorDark, 
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H, // 容错级别
      });
       // 获取生成的 Canvas 元素
       const canvas = container.getElementsByTagName('canvas')[0];
      // 将 Canvas 转换为 Base64 图片数据
      const qrCodeImage = canvas.toDataURL('image/png');
      const item={
        url:qrCodeImage,
        text:this.parameter.text
      }
      this.list.push(item)
      this.loading=false
    },
  },
};
