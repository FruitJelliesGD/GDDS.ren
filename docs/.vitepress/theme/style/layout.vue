  <script setup lang="ts">
  import { useData , inBrowser } from 'vitepress'
  import DefaultTheme from 'vitepress/theme'
  import { nextTick, provide , watchEffect } from 'vue'

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
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
      }
    )
  })

  const { lang } = useData()
  watchEffect(() => {
    if (inBrowser) {
     document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
    }
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