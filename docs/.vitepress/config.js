import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/',
    },
    en: {
      label: 'English',
      lang: 'en-US', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      titleTemplate: 'FruitJellies',
      themeConfig: {
        notFound: {
          title: "Grats, you broke it.",
          quote: "Where did it go?",
          linkText: 'Respawn',
        },
    
        lastUpdated: {
          text: 'Last updated',
        },
    
        //文章页脚
        docFooter: {
          prev: 'Previous Page',
          next: 'Next page',
        },
    
        //深浅切换按钮
        darkModeSwitchTitle: 'Switch to Dark Mode',
        lightModeSwitchTitle: 'Switch to Light Mode',
    
        darkModeSwitchLabel: 'Dark Mode Switch',
    
        //移动端文章顶部导航栏
        returnToTopLabel: 'Return to top',
    
        logo: '/pictures/icon.ico',
    
        // 站点地图
        sitemap: {
          hostname: 'https://gdds.ren',
        },
    
        //导航栏
        nav: [
          { text: "Ameng's Live Streaming Room", link: 'https://live.bilibili.com/12101556' },
    
          {
            text: 'Overwatch: Adventure',
            items: [
              { text: 'Demo版攻略', link: '/en/OverwatchAdventure/DemoGuide' },
              { text: '技能说明', link: '/en/OverwatchAdventure/Ability' },
              { text: '主角团技能介绍', link: '/en/OverwatchAdventure/Ability' },
              { text: '支线任务', link: '/en/OverwatchAdventure/Side' },

            ],
          },
    
          {
            text: 'Love and Overwatch',
            items: [
              { text: '攻略（内含剧透）', link: '/LoveAndOverwatch/Guide' },
            ],
          },
    
          {
            text: 'Live Tools',
            items: [
              { text: '在直播间装监控', link: '/liveTools/blap' },
              { text: 'B站一键分享', link: '/liveTools/bsb' },
            ],
          },
    
        ],
    
        //侧边栏
        sidebar: {
          '/OverwatchAdventure/': [
            {
              text: 'Overwatch: Adventure',
              items: [
                { text: 'Demo版攻略', link: '/en/OverwatchAdventure/DemoGuide' },
                { text: '技能说明', link: '/en/OverwatchAdventure/Battle' },
                { text: '主角团技能介绍', link: '/OverwatchAdventure/Ability' },
                { text: '支线任务', link: '/OverwatchAdventure/Side' },

              ],
            },
          ],
    
          '/LoveAndOverwatch/': [
            {
              text: 'Love And Overwatch',
              items: [
                { text: '游戏攻略', link: '/LoveAndOverwatch/Guide' },
              ],
            },
          ],
    
          '/liveTools/': [
            {
              text: 'Live Tools',
              items: [
                { text: '在直播间装监控', link: '/en/liveTools/blap' },
                { text: 'B站一键分享', link: '/en/liveTools/bsb' },
              ],
            },
          ],
    
        },
    
        sidebarMenuLabel: '目录',
    
        //页面导航
        outline: {
          level: [2, 3, 4],  // 展示 h2/h3/h4
          label: 'On this page',  // 导航标题（默认是 "On this page"）
        },
    
        //页脚
        footer: {
          message: '<a href="https://beian.miit.gov.cn/" target="_blank">Liao ICP Filing No. 2025067927-1</a>',
          copyright: `© 2024-${new Date().getFullYear()} <a href="https://space.bilibili.com/5871349">FruitJellies</a> CopyRight`,
        },
    
        //本地搜索
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: 'Reset',
                backButtonTitle: 'Close',
                noResultsText: '未找到结果：',
    
                footer: {
                  selectText: 'Choose',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Navigate',
                  navigateUpKeyAriaLabel: 'Up',
                  navigateDownKeyAriaLabel: 'Down',
                  closeText: 'Close',
                  closeKeyAriaLabel: 'Esc',
                }
              }
            }
          }
        },
    
        //编辑文章
        editLink: {
          pattern: 'https://github.com/FruitJelliesGD/GDDS.ren/tree/main/docs/:path',
          text: 'Edit this page',
        },
    
        externalLinkIcon: true,
       
        appearance: true,
      },
    },
  },

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

  title: 'gdds.ren',
  titleTemplate: '果冻大神',

  description: '果冻大神的网站',

  markdown: {
    codeCopyButtonTitle: '点击复制',
    image: {
      lazyLoading: true,
    },
  },

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
        text: '守望大冒险',
        items: [
          { text: 'Demo版攻略', link: '/OverwatchAdventure/DemoGuide' },
          { text: '战斗相关', link: '/OverwatchAdventure/Battle' },
          { text: '主角团技能介绍', link: '/OverwatchAdventure/Ability' },
          { text: '支线任务', link: '/OverwatchAdventure/Side' },

        ],
      },

      {
        text: '恋与守望',
        items: [
          { text: '攻略（内含剧透）', link: '/LoveAndOverwatch/Guide' },                   
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
      '/OverwatchAdventure/': [
        {
          text: '守望大冒险',
          items: [
            { text: 'Demo版攻略', link: '/OverwatchAdventure/DemoGuide' },
            { text: '战斗相关', link: '/OverwatchAdventure/Battle' },
            { text: '主角团技能介绍', link: '/OverwatchAdventure/Ability' },
            { text: '支线任务', link: '/OverwatchAdventure/Side' },
          ],
        },
      ],

      '/LoveAndOverwatch/': [
        {
          text: '恋与守望',
          items: [
            { text: '游戏攻略', link: '/LoveAndOverwatch/Guide' },
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

    appearance: true,
  },
});
