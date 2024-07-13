import Result from './components/Result'
import Search from './components/Search'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useShortCut from './hooks/useShortCut'
import Error from './components/Error'
import { useEffect, useRef } from 'react'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    mainRef.current?.addEventListener('mouseover', (e: MouseEvent) => {
      window.api.setIgnoreMouseEvents(false)
    })
    document.body?.addEventListener('mouseover', (e: MouseEvent) => {
      if (e.target === document.body) {
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }, [])
  const { register } = useShortCut()
  register('search', 'ctrl+shift+;')
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <main className="relative p-3" ref={mainRef}>
        <Error />
        <Search />
        <Result />
      </main>
    </StyleSheetManager>
  )
}

export default App
