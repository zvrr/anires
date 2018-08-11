<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 10,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* 大家好，我是数位小猎手，
* 我来找些大数据攻城狮！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，开始团队和职位介绍 */


`,`
/* 这个介绍好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`,`
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `### 数位大数据中心

坐标：深圳市南山区软件产业基地5栋C座

团队：数位大数据部，一直致力成为最专业有爱的团队。

全国领先的线下场景大数据服务商，拥有58个垂直领域，208+城市覆盖，

5000万+精确室内POI及属性标签信息，致力于场景识别，

重构世界现实，赋能线下，贯穿线上线下应用场景。

团队负责构建公司核心大数据平台和大数据应用系统，以连接和智能两大核心产品设计为理念，

提供9亿+终端会员的数据平台服务，承载日均100+亿定位请求。


#### 联系方式
* http://www.szshuwei.com/index.html
* [Boss直聘](https://www.zhipin.com/job_detail/0e09f186783b27b01XB-39-4GVU~.html)
* 邮箱：zelus.wu@nf-3.com
* ![微信](https://raw.githubusercontent.com/zvrr/anires/master/static/WechatIMG5.png)

#### 大数据研发工程师

#### 工作职责
1. 参与大数据平台产品的架构和规划，用户基础数据及用户画像的体系建设；
2. 负责大数据平台和基础产品的开发和维护，
3. 建设日均增量100T数据基础平台建设；
2. 基于用户行为数据，构建高性能，低延迟的处理流程；
4. 业务数据仓库架构设计、建模和ETL开发，构建可扩展的数据仓库和分析解决方案；

#### 岗位要求
1. 3年以上的大型数据仓库/数据调度/数据报表分析平台建设经验；
3. 精通Java/Scala，C++，Python等开发语言至少一个以上，具备良好的面向对象和函数编程思想，了解常用设计模式；
4. 熟悉Hadoop、Flume、Spark、Hbase、Lucene、ES、MR等数据组件，有源代码阅读和剖析经验，Contributor或者Committer优先；
3. 熟悉Mysql/Postgresql，有复杂sql优化经验;
4. 熟悉分布式系统的基础理论, 有高并发系统的架构设计、开发和调试经验
4. 熟悉数据可视化的基本方法，有数据可视化的开发经验优先；
5. 良好的学习和沟通能力，责任心强，强烈的技术敏锐度，良备的逻辑分析能力，独立解决问题

#### 高级JAVA研发工程师

#### 岗位描述：

1. 负责数位核心系统相关产品后台研发；
2. 负责Linux下高可用分布式Java服务设计开发和数据库优化；
3. 能够承担技术攻坚项目；
4. 参与平台微服务化架构设计

#### 岗位要求：
1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；
2. 3年或以上JAVA开发经验，熟悉MVC架构和UML建模语言等相关技术；
3. 熟练使用主流开发框架，如Springboot,dubbo, 消息队列等；
4. 熟悉shell脚本，有awk等使用经验；
5. 熟悉Mysql、Postgresql相关知识，有数据库调优经验者优先；
6. 有大数据服务开发经验，能够处理高并发服务者优先；
7. 熟悉公有云环境和相关组件服务；
7. 熟悉网络、多线程、IO、内存管理等方面编程；
8. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。

#### 高级WEB研发工程师
#### 岗位描述：

1. 负责大型互联网产品研发设计
2. 负责前端技术规范落地和能力提升
3. 负责应用 JavaScript 和相关技术与后台进行交互通信
4. 负责web性能的持续关注及优化

#### 岗位要求：

1. 具备丰富的Web前端架构经验，精通前端技术，熟悉动静分离架构，对于大型互联网产品的架构设计有实际经验；
2. 能熟练使用主流的JavaScript框架或JavaScript库,熟练vuejs/react/angular/Backbone等MVC框架；
3. 熟练使用 grunt/webpack ，熟悉nodejs进行系统搭建可优先录取；
4. 对Web标准和兼容性有良好认识，能够高保真还原设计稿，具备良好的代码风格以及接口、架构设计能力；
5. 有良好的沟通能力和团队合作能力，善于沟通，工作自主驱动，具备良好的问题定位分析能力
6. 喜欢运动、音乐、美术等，有一技之长将获得加分


`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
</style>
