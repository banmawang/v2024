import Result from './components/Result'
import Search from './components/Search'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useShortCut from './hooks/useShortCut'
import Error from './components/Error'

function App(): JSX.Element {
  const { register } = useShortCut()
  register('search', 'ctrl+shift+;')
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Error />
      <Search />
      <Result />
    </StyleSheetManager>
  )
}

export default App
