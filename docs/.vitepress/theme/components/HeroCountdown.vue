<script setup lang="ts">
import { FieldLabel } from 'blockly';
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  /** UTC 时间字符串，例如：2026-02-01T12:00:00Z */
  targetUtc: string
  label?: string
}>()

const timeLeft = ref('')

let timer: number | undefined

function update() {
  const now = Date.now()
  const target = Date.parse(props.targetUtc)
  const diff = target - now

  if (isNaN(target)) {
    timeLeft.value = '时间格式错误'
    return
  }

  if (diff <= 0) {
    timeLeft.value = ''
    clearInterval(timer)
    return
  }

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)

  timeLeft.value = `${d} : ${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`
}

onMounted(() => {
  update()
  timer = window.setInterval(update, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="hero-countdown">
    <div v-if="label" class="label">距离{{ label }}还有</div>
    <div class="time">{{ timeLeft }}</div>
    <div class="timezone"></div>
  </div>
</template>

<style scoped>
.hero-countdown {
  margin-top: 16px;
  text-align: none;
}

.time {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-brand);
  margin: 4px 0;
}

.timezone {
  font-size: 12px;
  opacity: 0.5;
}
</style>
