import { ref, watch, onMounted } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const data = ref(JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue)))

  watch(
    data,
    (newVal) => {
      localStorage.setItem(key, JSON.stringify(newVal))
    },
    { deep: true }
  )

  onMounted(() => {
    const stored = localStorage.getItem(key)
    if (stored) {
      data.value = JSON.parse(stored)
    }
  })

  return data
}
