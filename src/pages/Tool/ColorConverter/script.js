import {copyToClipboard} from 'src/utils'

export default {
  name: "ColorConverter",
  data() {
    return {
      hex: { a: "", b: "" },
      rgb: { a: "", b: "" },
      color: "",
      capture:'',
    };
  },
  computed: {},
  methods: {
    copyToClipboard(text){
      copyToClipboard(text)
      this.$q.notify({ message: '复制成功'+text, type: 'positive' })
    },
    hexToRgb(hex) {
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);
      return `rgb(${r}, ${g}, ${b})`;
    },
    rgbToHex(rgb) {
      // 将RGB字符串转换为数组
      // 使用正则表达式提取RGB值
      const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

      if (match) {
        // 提取匹配的数值并转换为数字
        const [r, g, b] = match.slice(1).map(Number);
        return (
          "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
      }
    },
    captureColor(){
      const eyeDropper = new EyeDropper();
    eyeDropper.open().then(res => {
      this.capture=res.sRGBHex
    }).catch(err=>{
      this.$q.notify({ message: '取消拾取'+text, type: 'error' })
    });

    }
  },
};
