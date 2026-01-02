import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({

  transformHead({ assets }) {
    // 相应地调整正则表达式以匹配字体
    const myFontFile = assets.find(file => /OPPO Sans 4.0.ttf/.test(file))
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          },
        ]
      ]
    }
  },

  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/pictures/icon.ico' }],
  ],

  lang: 'zh-Hans',

  title: 'gdds.ren',

  description: '果冻大神',

  themeConfig: {
    notFound: {
      title: '这也妹有网页啊',
      quote: '你这是干哪来了',
      linkText: '回去吧',
    },

    lastUpdated: {
      text: '最后更新',
    },

    //文章页脚
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    //深浅切换按钮
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',

    darkModeSwitchLabel: '深浅模式切换',

    //移动端文章顶部导航栏
    returnToTopLabel: '返回顶部',

    logo: '/pictures/icon.ico',

    // 站点地图
    sitemap: {
      hostname: 'https://gdds.ren',
    },

    //导航栏
    nav: [
      { text: 'A梦直播间', link: 'https://live.bilibili.com/12101556' },

      {
        text: '攻略（内含剧透）',
        items: [
          { text: '守望大冒险', link: '/gameGuide/swdmxdemo' },
          { text: '恋与守望', link: '/gameGuide/lyswgl' },
        ],
      },

      {
        text: '直播相关工具',
        items: [
          { text: '在直播间装监控', link: '/liveTools/blap' },
          { text: 'B站一键分享', link: '/liveTools/bsb' },
        ],
      },

    ],

    //侧边栏
    sidebar: {
      '/gameGuide/': [
        {
          text: '游戏攻略',
          items: [
            { text: '守望大冒险', link: '/gameGuide/swdmxdemo' },
            { text: '恋与守望', link: '/gameGuide/lyswgl' },
          ],
        },
      ],

      '/liveTools/': [
        {
          text: '直播工具',
          items: [
            { text: '在直播间装监控', link: '/liveTools/blap' },
            { text: 'B站一键分享', link: '/liveTools/bsb' },
          ],
        },
      ],

    },

    sidebarMenuLabel: '目录',

    //页面导航
    outline: {
      level: [2, 3, 4],  // 展示 h2/h3/h4
      label: '本页导航',  // 导航标题（默认是 "On this page"）
    },

    //页脚
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2025067927号-1</a>',
      copyright: `© 2024-${new Date().getFullYear()} <a href="https://space.bilibili.com/5871349">果冻大神</a> 版权所有`,
    },

    //本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '未找到结果：',

            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc',
            }
          }
        }
      }
    },

    //编辑文章
    editLink: {
      pattern: 'https://github.com/FruitJelliesGD/GDDS.ren/tree/main/docs/:path',
      text: '编辑此页',
    },

    externalLinkIcon: true,

    markdown: {
      codeCopyButtonTitle: '复制',
    },

    appearance: true,
  },
});
