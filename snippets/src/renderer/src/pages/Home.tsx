import isPropValid from '@emotion/is-prop-valid'
import Error from '@renderer/components/Error'
import Result from '@renderer/components/Result'
import Search from '@renderer/components/Search'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import useShortCut from '@renderer/hooks/useShortCut'
import { MutableRefObject, useEffect, useRef } from 'react'
import { StyleSheetManager } from 'styled-components'

function Home(): JSX.Element {
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

export default Home
