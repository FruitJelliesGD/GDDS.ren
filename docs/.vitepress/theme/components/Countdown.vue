<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  target: {
    type: String,
    required: true
  }
})

const timeLeft = ref('')
let timer = null

function updateCountdown() {
  const now = Date.now()
  const targetTime = new Date(props.target).getTime()
  const diff = targetTime - now

  if (diff <= 0) {
    timeLeft.value = '已到达 🎉'
    clearInterval(timer)
    return
  }

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)

  timeLeft.value = `${d}天 ${h}小时 ${m}分 ${s}秒`
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <span class="countdown">
    {{ timeLeft }}
  </span>
</template>

<style scoped>
.countdown {
  font-weight: bold;
  color: var(--vp-c-brand);
}
</style>
