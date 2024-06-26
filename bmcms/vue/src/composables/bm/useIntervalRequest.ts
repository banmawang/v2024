import dayjs from 'dayjs'
import { ref } from 'vue'
import useStorage from './useStorage'
const key = 'interval_exec_time'
const storage = useStorage()
let intervalId: undefined | number = 0
const time = ref<number>(0)

export default (timeout: number, fn: (...data: any[]) => Promise<void>) => {
  //定时器定义
  const interval = () => {
    intervalId = setInterval(() => {
      time.value = dayjs(storage.get(key)).add(timeout, 'second').diff(dayjs(), 'second')
      if (time.value <= 0) {
        clearInterval(intervalId)
        intervalId = undefined
      }
    }, 50)
  }

  //执行函数
  const exec = async (...args: any[]) => {
    if (storage.get(key))
      return ElMessage({
        message: `请${time.value}秒后重试`,
        type: 'error',
      })
    await fn(...args)
    storage.set(key, dayjs(), timeout)
    interval()
  }
  if (storage.get(key)) interval()

  return { time, exec }
}
