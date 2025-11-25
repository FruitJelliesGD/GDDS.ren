---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "果冻大神的"
  text: "艺术圣堂"
  tagline: 所有平台ID：果冻大神
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

根据 `守望先锋` 世界观开发的一款同人 RPG 游戏

::: danger 喂？
放门口都中
:::

## 恋与守望

根据 `守望先锋` 世界观开发的一款嘎啦给木

::: danger 就在刚刚 
我的躯体化 抑郁症 焦虑症 精神分裂症 双相情感障碍 强迫症 创伤后应激障碍 社交恐惧症 孤独症 谱系障碍注意缺陷 多动障碍躯体形式障碍分离性障碍 进食障碍神 经性厌食症 嗜睡障碍 物质使用障碍 酒精依赖 药物成瘾 人格障碍 边缘型人格障碍 反社会型人格障碍 偏执性精神障碍 急性应激障碍同时发作了
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
      { icon: 'qq', title:'2327796730'},
      { icon: 'bambulab', link: 'https://makerworld.com.cn/zh/@fruitjellies' },
    ],
    sponsor: 'https://afdian.com/a/fruitjellies',
    actionText: '赞助我',
  },
]
</script>

## 果冻大神是谁

不重要

<VPTeamMembers size="medium" :members="members" />

<style>
/* 只针对本页面内的所有图片 */
img {
  border-radius: 12px;
}

</style>