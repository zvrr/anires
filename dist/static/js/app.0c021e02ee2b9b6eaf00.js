webpackJsonp([1],{100:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},40:function(n,e){},41:function(n,e,t){t(89);var r=t(15)(t(48),t(100),"data-v-647e008b",null);n.exports=r.exports},42:function(n,e,t){t(87);var r=t(15)(t(49),t(98),"data-v-35c047fd",null);n.exports=r.exports},43:function(n,e,t){t(86);var r=t(15)(t(46),t(97),"data-v-22ce9519",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(15)(t(47),t(99),"data-v-53c8d54c",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(26),s=t.n(i),a=t(25),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:10,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是数位小猎手，\n* 我来找些大数据攻城狮！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，开始团队和职位介绍 */\n\n\n","\n/* 这个介绍好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"### 数位大数据中心\n\n坐标：深圳市南山区软件产业基地5栋C座\n\n团队：数位大数据部，一直致力成为最专业有爱的团队。\n\n全国领先的线下场景大数据服务商，拥有58个垂直领域，208+城市覆盖，\n\n5000万+精确室内POI及属性标签信息，致力于场景识别，\n\n重构世界现实，赋能线下，贯穿线上线下应用场景。\n\n团队负责构建公司核心大数据平台和大数据应用系统，以连接和智能两大核心产品设计为理念，\n\n提供9亿+终端会员的数据平台服务，承载日均100+亿定位请求。\n\n\n#### 联系方式\n* http://www.szshuwei.com/index.html\n* [Boss直聘](https://www.zhipin.com/job_detail/0e09f186783b27b01XB-39-4GVU~.html)\n* 邮箱：zelus.wu@nf-3.com\n* ![微信](https://raw.githubusercontent.com/zvrr/anires/master/static/WechatIMG5.png)\n\n#### 大数据研发工程师\n\n#### 工作职责\n1. 参与大数据平台产品的架构和规划，用户基础数据及用户画像的体系建设；\n2. 负责大数据平台和基础产品的开发和维护，\n3. 建设日均增量100T数据基础平台建设；\n2. 基于用户行为数据，构建高性能，低延迟的处理流程；\n4. 业务数据仓库架构设计、建模和ETL开发，构建可扩展的数据仓库和分析解决方案；\n\n#### 岗位要求\n1. 3年以上的大型数据仓库/数据调度/数据报表分析平台建设经验；\n3. 精通Java/Scala，C++，Python等开发语言至少一个以上，具备良好的面向对象和函数编程思想，了解常用设计模式；\n4. 熟悉Hadoop、Flume、Spark、Hbase、Lucene、ES、MR等数据组件，有源代码阅读和剖析经验，Contributor或者Committer优先；\n3. 熟悉Mysql/Postgresql，有复杂sql优化经验;\n4. 熟悉分布式系统的基础理论, 有高并发系统的架构设计、开发和调试经验\n4. 熟悉数据可视化的基本方法，有数据可视化的开发经验优先；\n5. 良好的学习和沟通能力，责任心强，强烈的技术敏锐度，良备的逻辑分析能力，独立解决问题\n\n#### 高级JAVA研发工程师\n\n#### 岗位描述：\n\n1. 负责数位核心系统相关产品后台研发；\n2. 负责Linux下高可用分布式Java服务设计开发和数据库优化；\n3. 能够承担技术攻坚项目；\n4. 参与平台微服务化架构设计\n\n#### 岗位要求：\n1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；\n2. 3年或以上JAVA开发经验，熟悉MVC架构和UML建模语言等相关技术；\n3. 熟练使用主流开发框架，如Springboot,dubbo, 消息队列等；\n4. 熟悉shell脚本，有awk等使用经验；\n5. 熟悉Mysql、Postgresql相关知识，有数据库调优经验者优先；\n6. 有大数据服务开发经验，能够处理高并发服务者优先；\n7. 熟悉公有云环境和相关组件服务；\n7. 熟悉网络、多线程、IO、内存管理等方面编程；\n8. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。\n\n#### 高级WEB研发工程师\n#### 岗位描述：\n\n1. 负责大型互联网产品研发设计\n2. 负责前端技术规范落地和能力提升\n3. 负责应用 JavaScript 和相关技术与后台进行交互通信\n4. 负责web性能的持续关注及优化\n\n#### 岗位要求：\n\n1. 具备丰富的Web前端架构经验，精通前端技术，熟悉动静分离架构，对于大型互联网产品的架构设计有实际经验；\n2. 能熟练使用主流的JavaScript框架或JavaScript库,熟练vuejs/react/angular/Backbone等MVC框架；\n3. 熟练使用 grunt/webpack ，熟悉nodejs进行系统搭建可优先录取；\n4. 对Web标准和兼容性有良好认识，能够高保真还原设计稿，具备良好的代码风格以及接口、架构设计能力；\n5. 有良好的沟通能力和团队合作能力，善于沟通，工作自主驱动，具备良好的问题定位分析能力\n6. 喜欢运动、音乐、美术等，有一技之长将获得加分\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(26),s=t.n(i),a=t(25),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:10,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是数位小猎手，\n* 我来找些大数据攻城狮！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，开始团队和职位介绍 */\n\n\n","\n/* 这个介绍好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"### 数位大数据中心\n\n坐标：深圳市南山区软件产业基地5栋C座\n\n团队：数位大数据部，一直致力成为最专业有爱的团队。\n\n全国领先的线下场景大数据服务商，拥有58个垂直领域，208+城市覆盖，\n\n5000万+精确室内POI及属性标签信息，致力于场景识别，\n\n重构世界现实，赋能线下，贯穿线上线下应用场景。\n\n团队负责构建公司核心大数据平台和大数据应用系统，以连接和智能两大核心产品设计为理念，\n\n提供9亿+终端会员的数据平台服务，承载日均100+亿定位请求。\n\n\n#### 联系方式\n* http://www.szshuwei.com/index.html\n* [Boss直聘](https://www.zhipin.com/job_detail/0e09f186783b27b01XB-39-4GVU~.html)\n* 邮箱：zelus.wu@nf-3.com\n* ![微信](https://raw.githubusercontent.com/zvrr/anires/master/static/WechatIMG5.png)\n\n#### 大数据研发工程师\n\n#### 工作职责\n1. 参与大数据平台产品的架构和规划，用户基础数据及用户画像的体系建设；\n2. 负责大数据平台和基础产品的开发和维护，\n3. 建设日均增量100T数据基础平台建设；\n2. 基于用户行为数据，构建高性能，低延迟的处理流程；\n4. 业务数据仓库架构设计、建模和ETL开发，构建可扩展的数据仓库和分析解决方案；\n\n#### 岗位要求\n1. 3年以上的大型数据仓库/数据调度/数据报表分析平台建设经验；\n3. 精通Java/Scala，C++，Python等开发语言至少一个以上，具备良好的面向对象和函数编程思想，了解常用设计模式；\n4. 熟悉Hadoop、Flume、Spark、Hbase、Lucene、ES、MR等数据组件，有源代码阅读和剖析经验，Contributor或者Committer优先；\n3. 熟悉Mysql/Postgresql，有复杂sql优化经验;\n4. 熟悉分布式系统的基础理论, 有高并发系统的架构设计、开发和调试经验\n4. 熟悉数据可视化的基本方法，有数据可视化的开发经验优先；\n5. 良好的学习和沟通能力，责任心强，强烈的技术敏锐度，良备的逻辑分析能力，独立解决问题\n\n#### 高级JAVA研发工程师\n\n#### 岗位描述：\n\n1. 负责数位核心系统相关产品后台研发；\n2. 负责Linux下高可用分布式Java服务设计开发和数据库优化；\n3. 能够承担技术攻坚项目；\n4. 参与平台微服务化架构设计\n\n#### 岗位要求：\n1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；\n2. 3年或以上JAVA开发经验，熟悉MVC架构和UML建模语言等相关技术；\n3. 熟练使用主流开发框架，如Springboot,dubbo, 消息队列等；\n4. 熟悉shell脚本，有awk等使用经验；\n5. 熟悉Mysql、Postgresql相关知识，有数据库调优经验者优先；\n6. 有大数据服务开发经验，能够处理高并发服务者优先；\n7. 熟悉公有云环境和相关组件服务；\n7. 熟悉网络、多线程、IO、内存管理等方面编程；\n8. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。\n\n#### 高级WEB研发工程师\n#### 岗位描述：\n\n1. 负责大型互联网产品研发设计\n2. 负责前端技术规范落地和能力提升\n3. 负责应用 JavaScript 和相关技术与后台进行交互通信\n4. 负责web性能的持续关注及优化\n\n#### 岗位要求：\n\n1. 具备丰富的Web前端架构经验，精通前端技术，熟悉动静分离架构，对于大型互联网产品的架构设计有实际经验；\n2. 能熟练使用主流的JavaScript框架或JavaScript库,熟练vuejs/react/angular/Backbone等MVC框架；\n3. 熟练使用 grunt/webpack ，熟悉nodejs进行系统搭建可优先录取；\n4. 对Web标准和兼容性有良好认识，能够高保真还原设计稿，具备良好的代码风格以及接口、架构设计能力；\n5. 有良好的沟通能力和团队合作能力，善于沟通，工作自主驱动，具备良好的问题定位分析能力\n6. 喜欢运动、音乐、美术等，有一技之长将获得加分\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(91),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},86:function(n,e){},87:function(n,e){},88:function(n,e){},89:function(n,e){},97:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},98:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},99:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.0c021e02ee2b9b6eaf00.js.map