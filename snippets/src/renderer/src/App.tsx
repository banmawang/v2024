import Result from './components/Result'
import Search from './components/Search'
import { CodeProvider } from './context/CodeContext'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

function App(): JSX.Element {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      {/* <CodeProvider> */}
      <Search />
      <Result />
      {/* </CodeProvider> */}
    </StyleSheetManager>
  )
}

export default App
