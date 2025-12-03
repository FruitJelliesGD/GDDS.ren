---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "果冻大神的"
  text: "艺术圣堂"
  tagline: 只有四个字，没有五个字
  image:
    src: /pictures/swdmx.webp
    alt: 最新作品
  actions:
    - theme: brand
      text: 游玩守望大冒险
      link: https://overwatchadventure.pages.dev/
    - theme: alt
      text: B站主页
      link: https://space.bilibili.com/5871349
    - theme: alt
      text: 给我压岁钱
      link: https://afdian.com/a/fruitjellies
    - theme: alt
      text: 游玩恋与守望
      link: https://www.66rpg.com/game/1687717

features:
  - icon: 🤓
    title: 蒙涵
    details: 银质子弹！
  - icon: 🍸️
    title: 冷撒
    details: 再来一杯！
  - icon: 👵
    title: K神
    details: 消除记忆！
  - icon: 🦍
    title: 孤雪
    details: 蒙涵跪下！
  - icon: 🐯
    title: 金木
    details: 牛的蒙子！
  - icon: 💣
    title: 刘念
    details: 爸爸级别！
---

## 守望大冒险

基于 `守望先锋` 游戏背景开发的一款同人 RPG 游戏

::: danger 预计春节正式发布  
丁蒙涵一生中遇到的男人构成了风花雪月四个字  
刘念   是忽远忽近捉摸不透的风  
孔春亭 是美丽盛开香醇扑鼻的花  
徐秋林 是冷傲高贵一路相随的雪  
易虎   是高悬云端温柔陪伴的月  
银质子弹 是四个字  
:::

## 恋与守望

基于 `守望先锋` 游戏背景开发的、以Ameng为主角的一款同人嘎啦给木

::: danger 游玩录播
Kaneki：[玩恋与守望自己的所有结局](https://www.bilibili.com/video/BV1dwb8zeE4G/)  
Ameng：[玩恋与守望（带SC和弹幕）](https://www.bilibili.com/video/BV1yhbFzAEef/)  
Kyo：[我要和所有人结冰（跳过广告纯享版）](https://www.bilibili.com/video/BV1DpbFzBEjk/)  
Remedy：[小泽玩恋与守望 不全版](https://www.bilibili.com/video/BV1cRbbzgEJ6/)  
你的心脏脏：[最串最爱笑的主播玩恋与守望](https://www.bilibili.com/video/BV1G2bqzmE3J/)  
Minsea：[速通恋与守望（真正的和所有人结冰）](https://www.bilibili.com/video/BV1LVbezCEcs/)  
福福米：[体验《恋与守望》Guxue线 守望先锋年度巨作！](https://www.bilibili.com/video/BV1Fobhz2E5y/)  
:::

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/pictures/profilePicture.webp',
    name: '果冻大神',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/FruitJelliesGD' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/5871349' },
      { icon: 'steam', link: 'https://steamcommunity.com/id/fruitjellies/' },
      { icon: 'qq', link:'https://qm.qq.com/q/2ERBjrDPfe'},
      { icon: 'bambulab', link: 'https://makerworld.com.cn/zh/@fruitjellies' },
      { icon: 'battledotnet', link: '/battlenet' },
    ],
    sponsor: 'https://afdian.com/a/fruitjellies',
    actionText: '赞助我',
  },
]
</script>

## 果冻大神是谁

不重要

<VPTeamMembers size="medium" :members="members" />