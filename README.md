### make-redux
description: 使用context模拟实现react-redux

### npm run start

### npm run build

### 代码架构说明
```
·
├── package.json
│
├── public
│   └─ index.html                       入口页面
│
├── src
│   ├── components                      所有通用组件
│   │    ├─Content.js                   内容组件
|   |    ├─Header.js                    标题组件
│   │    └─ThemeSwitch.js               更换主题按钮组件
│   │
│   ├── context                         全局通用context
│   │    ├─Theme.js                     
│   │    └─ ...
│   │
│   ├── store                           数据模块化
│   │    ├─store.js
│   │    └─ ...
│   │
│   ├── index.js                         代码入口
│   │
│   ├── index.css
│   │
│   ├── serviceWorker.js
│   └─
└─
```