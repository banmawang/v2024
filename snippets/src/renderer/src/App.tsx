import Result from './components/Result'
import Search from './components/Search'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useShortCut from './hooks/useShortCut'

function App(): JSX.Element {
  const { register } = useShortCut()
  register('search', 'ctrl+shift+;')
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Search />
      <Result />
    </StyleSheetManager>
  )
}

export default App
