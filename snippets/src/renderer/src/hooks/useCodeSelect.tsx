import { useCallback, useEffect, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setCurrentIndex((pre) => (pre - 1 < 0 ? data.length - 1 : pre - 1))
          break
        case 'ArrowDown':
          setCurrentIndex((pre) => (pre + 1 > data.length - 1 ? 0 : pre + 1))
          break
        case 'Enter':
          navigator.clipboard.writeText(data[currentIndex].content)
      }
    },
    [data, currentIndex]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  useEffect(() => setCurrentIndex(0), [data])

  return { data, currentIndex }
}
