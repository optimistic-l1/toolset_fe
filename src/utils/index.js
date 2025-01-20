//复制文本
export  const copyToClipboard=(text)=>{
    let copyipt = document.createElement("input");
    copyipt.setAttribute("value", text);
    document.body.appendChild(copyipt);
    copyipt.select();
    document.execCommand("copy");
    document.body.removeChild(copyipt);
  }