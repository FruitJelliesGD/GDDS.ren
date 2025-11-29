  <script setup lang="ts">
  import { useData } from 'vitepress'
  import DefaultTheme from 'vitepress/theme'
  import { nextTick, provide } from 'vue'

  const { isDark } = useData()

  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  provide('toggle-appearance', async () => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value
      return
    }

    const wasDark = isDark.value

    await document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    }).ready

    const fromTo = wasDark ? [0, 1] : [1, 0]
    
    document.documentElement.animate(
      //{ clipPath: isDark.value ? clipPath.reverse() : clipPath },
      { opacity: fromTo },
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
      }
    )
  })
  </script>

  <template>
    <DefaultTheme.Layout />
  </template>

  <style>
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition-old(root),
  .dark::view-transition-new(root) {
    z-index: 1;
  }

  ::view-transition-new(root),
  .dark::view-transition-old(root) {
    z-index: 9999;
  }

  </style>