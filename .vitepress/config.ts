import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '光之魔法书',
  description: 'Chase the Light',
  base: '/magicbook/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/magicbook/favicon.ico' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '返回奇点', link: 'https://lcl.sdutacm.cn' },
      { text: '意义不明展览馆', link: '/pleasant-gallery/' },
    ],

    sidebar: {
      '/missions/': [
        {
          text: '见习任务',
          items: [
            { text: '引言', link: '/missions/' },
            { text: 'M0：Git', items: [{ text: 'M0.1', link: '/missions/M0/M0-1' }] },
            { text: 'M1：爬虫 🔷', items: [{ text: 'M1.1', link: '/missions/M1/M1-1' }] },
            { text: 'M2：后端 🔒', items: [] },
            { text: 'M3：数据库 🔒', items: [] },
            { text: 'M4：前端 🔒', items: [] },
            { text: 'M5：集成部署 🔒', items: [] },
          ],
        },
      ],
      '/catalog/': [
        {
          text: '魔法目录',
          items: [
            { text: '引言', link: '/catalog/' },
          ],
        },
      ],
      '/pleasant-gallery/': [],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/sdutacm' }],

    editLink: {
      pattern: 'https://github.com/sdutacm/lcl-magic-book/edit/master/:path',
      text: '消耗大量魔力覆写此页，并同步到世界树',
    },

    footer: {
      message: '由三位创世大魔法使共同写成，作为世界树记忆被封存并藉由元素脉络传播至全宇宙。',
      copyright: 'Copyright © 2023-present SDUTACM',
    },

    outline: {
      label: '由魔法生成的目录',
    },
    lastUpdatedText: '更新于',
    docFooter: {
      prev: '回溯上一页',
      next: '开启下一页',
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '飞回顶部',
  },
});
