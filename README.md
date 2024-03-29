# 阴阳怪气编码

[![License](https://img.shields.io/badge/License-GPLv3.0-blue)](https://choosealicense.com/licenses/gpl-3.0/)
[![Language](https://img.shields.io/badge/Language-JavaScript-yellowgreen)](https://www.javascript.com/)
[![Start Online](https://img.shields.io/badge/Start-Online-brightgreen)](https://jiji.pro/yygq.js/)

## [在线编码](https://jiji.pro/yygq.js/)

## 阴阳怪气？
阴阳怪气是一个汉语成语，拼音是 `yīn yáng guài qì` ，意思是形容态度怪癖，冷言冷语，不可捉摸。出自《北京人》。

于是就有了阴阳怪气编码， `例子.` 的编码如下:
```
不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 
```

## 优势
||Base64编码|阴阳怪气编码|
|:-:|:-:|:-:|
|效率|❌效率高|✔️效率低，才能激励Intel改进他们的CPU|
|兼容|❌完全兼容|✔️不支持ES6语法的JS解释器将无法使用，才能激励用户升级浏览器|
|逼格|❌并不|✔️满满|
|例子|5L6L5a2QLg==|不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ |

## 安装

### 下载到指定包中
```shell
$ npm install --save yygq
```

### 全局安装
```shell
$ npm install -g yygq
```

### Clone
```shell
$ git clone https://github.com/mmdjiji/yygq.js
```

## 导入

### 浏览器
```html
<script src="yygq.min.js"></script>
```
也可以使用 CDN 接入:
```html
<script src="https://jiji.pro/yygq.js/yygq.min.js"></script>
```
### Node.js
```js
const yygq = require('yygq')
```

如果你想使用 ES6 Module 的 `import` 来使用，可使用:
```js
import { yygq } from './yygq.import.js'
```

## 使用

### 编码
```js
yygq.encode('OK') //就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 
```
### 解码
```js
yygq.decode('就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 就 这 ¿ 不 会 吧 ？ 就 这 ¿ 不 会 吧 ？ 不 会 吧 ？ ') //OK
```

## 开源
本项目以 [GPLv3.0协议](https://choosealicense.com/licenses/gpl-3.0/) 开源。