<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle" v-if="isShow == true"></StyleEditor>
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
        isShow: true,
        interval: 10,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* 大家好，我是数位小猎手，
* 我来找些大数据攻城狮小伙伴，急！
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
        fullMarkdown: `
#### -------------
#### 公司
#### -------------

数位全国领先的线下场景大数据服务商，拥有58个垂直领域，208+城市覆盖，

5000万+精确室内POI及属性标签信息，致力于场景识别，

重构世界现实，赋能线下，贯穿线上线下应用场景。

#### --------------------
#### 数据中心团队
#### --------------------

一只致力成为专业有爱的团队，用数据赋能行业生态，挖掘分析数据深层次价值，收获成长快乐。

负责构建公司核心大数据平台和大数据应用系统，以连接和智能为核心产品设计理念，

建设P级别大数据计算平台(HDFS/Spark/Storm/HBase/MongoDB/Kylin等)，

包括大数据仓库，数据传输通道，分布式调度系统，AdHoc，OLAP，数据可视化，用户画像，

ABTest，广告推荐，反作弊，元数据管理，数据安全权限，数据运维等等一系列系统构建，

对内对外提供9亿+终端会员的数据平台服务，承载日均百亿级别请求。

#### ---------------------------------
#### 我们招聘各类大数据平台建设者
#### ---------------------------------

1. 大数据计算平台研发工程师
2. 高级JAVA研发工程师
3. 高级WEB研发工程师
4. 数据分析工程师
5. 爬虫工程师
6. 数据挖掘工程师
7. 数据产品经理
8. 运维工程师

#### --------------------------
#### 快，我们等待优秀的你
#### --------------------------

1. [猛戳招聘详情Boss直聘](https://www.zhipin.com/job_detail/0e09f186783b27b01XB-39-4GVU~.html)
2. 邮箱：zelus.wu@nf-3.com
3. ![微信zeluswu](https://s1.ax1x.com/2018/08/12/PcJ8D1.png)
4. 坐标：深圳 南山 软件产业基地 5栋C座 1001A
5. [公司快速发展壮大，http://www.szshuwei.com](http://www.szshuwei.com)
6. 感谢[jirengu-inc](https://github.com/jirengu-inc/animating-resume)开源

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
        await this.hideStyleEditor()
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
      },
      hideStyleEditor(){
        let that = this
        setTimeout(function(){
          that.isShow = false
        },2000)

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
