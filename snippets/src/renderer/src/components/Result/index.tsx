import useCode from '@renderer/hooks/useCode'
import { useEffect, useState } from 'react'
import './styles.scss'
import { Banmashou } from './styled'

export default function Result(): JSX.Element {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = (e: KeyboardEvent) => {
    if (data.length === 0) return
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((pre) => (pre - 1 <= 0 ? data.length - 1 : pre - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((pre) => (pre + 1 > data.length ? 0 : pre + 1))
        break
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data])
  return (
    <main className="main">
      {data.map((item, index) => (
        <Banmashou isActive={currentIndex === index} key={item.id}>
          {item.content}
        </Banmashou>
      ))}
    </main>
  )
}
