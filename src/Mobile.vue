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
* 大家好，我是珍爱网平台产品研发部小猎手，
* 我来找些攻城狮！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* 太高了 */
.styleEditor {
  height: 45vh;
}
/* 代码高亮 */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，开始团队和职位介绍 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
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
        fullMarkdown: `### 平台产品研发部

坐标：深圳市南山区航天科技广场A座20楼

团队：珍爱网平台产品研发部，一只致力成为最专业有爱的团队。

致力于连接线上和线下，打造高满意用户相亲恋爱体验服务，解决广大单身男女婚恋困扰，成就天下姻缘。

负责公司核心系统，高可用高性能架构研发工作，提供1.4亿会员的全链路生命周期管理系统，

以连接和智能两大核心产品设计为理念，基于分布式微服务理念构建，实践混合云、持续集成、自动化测试等系列创新，

提供简单好用的核心系统，支撑公司20亿+收入，

承载基础信息、资源分配、心理测试、匹配搜索、实时推荐、短信通道、语音识别、图片、视频分析等基础服务。

#### 高级JAVA研发工程师
##### 岗位描述

1. 负责珍爱网核心系统相关产品研发
2. 负责Linux下高可用分布式Java服务设计开发和数据库优化
3. 负责重大或疑难问题的技术攻关
4. 参与平台微服务化架构设计

##### 岗位要求

1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；
2. 3年或以上JAVA开发经验，熟悉MVC架构和UML建模语言等相关技术；
3. 熟练使用主流开发框架，如Spring cloud,dubbo, 消息队列等；
4. 熟悉shell脚本，有awk等使用经验；
5. 精通Mysql相关知识，有数据库调优经验者优先；
6. 有大数据服务开发经验，能够处理高并发服务者优先；
7. 熟悉公有云环境和相关组件服务；
7. 熟悉网络、多线程、IO、内存管理等方面编程；
8. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。

#### 高级Android研发工程师
##### 岗位描述

1. 负责珍爱网核心系统相关产品安卓版研发
2. 负责Android新技术的预研、引入，底层框架设计，基本组件研发、工具研发；
3. 负责重大或疑难问题的技术攻关

##### 岗位要求
1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；
2. 3年及以上Android软件开发经验，熟悉Android平台SDK以及框架原理，并具有开发SDK的能力，精通性能调优方法;
3. 具备解决复杂业务技术问题的能力，有多个完整的Android项目经验，并至少在一个大型项目中承担核心设计与开发工作;
4. 具备音视频项目经验或一线App项目研发经验者优先；
5. 精通Mysql相关知识，有数据库调优经验者优先；
6. 熟悉网络、多线程、IO、内存管理等方面编程；
7. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题

#### 联系方式

* [Boss直聘珍爱网平台产品研发部](https://m.zhipin.com/weijd/v2/boss/d86daeaa870e28d31HJ53N-_E1Y~?aid=07b5df7e131fbe2e1w~~&sid=self)
* 邮箱：goborabora@qq.com
* ![微信](https://raw.githubusercontent.com/zvrr/anires/master/static/WechatIMG5.png)

* 感谢[jirengu-inc](https://github.com/jirengu-inc/animating-resume)开源

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
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
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
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
