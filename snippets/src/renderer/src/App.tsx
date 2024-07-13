import Result from './components/Result'
import Search from './components/Search'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useShortCut from './hooks/useShortCut'
import Error from './components/Error'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
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
