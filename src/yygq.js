/*
  yygq.js
  Author: JiJi, XiaoZhuo
  GitHub: https://github.com/mmdjiji/yygq.js
*/
const yygq = (() => {
  const wordList = ['就 这 ¿ ', '不 会 吧 ？ '];
  const yygq = {
    encode: (src) => {
      let retval = "";
      for(let i=0; ; i++){
        let charCode = src.charCodeAt(i);
        if(isNaN(charCode)) break;
        let binaryStr = charCode.toString(2);
        if(charCode < 127){
          retval += '0' + binaryStr.padStart(8, '0');
        }else{
          retval += '1' + binaryStr.padStart(16, '0');
        }
      }
      retval = retval.replace(/./g, i=>wordList[i]);
      return retval;
    },
    decode: (src) => {
      let retval = "";
      const regList = wordList.map(x=>x.replace(/\s/g,''));
      src = src.replace(/\s/g,"");
      src = [...src].filter(x=>wordList.join('').split(' ').includes(x)).join('');
      src = src.match(RegExp(regList.join('|'),'g')).map(i=>regList.indexOf(i)).join('');
      for(let i=0; i+8 < src.length ; i++){
        if(src[i] == 0){
          retval += String.fromCharCode(parseInt(src.substr(i+1, 8), 2));
          i+=8;
        }else if(src[i] == 1){
          if(i+16 < src.length){
            retval += String.fromCharCode(parseInt(src.substr(i+1, 16), 2));
            i+=16;
          }else break;
        }else break;
      }
      return retval;
    }
  }
  return yygq;
})();
if (typeof(module) !== 'undefined' && module != null) {
  module.exports = yygq;
}