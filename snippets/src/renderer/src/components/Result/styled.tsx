import styled from 'styled-components'

interface Props {
  isActive: boolean
}

export const Banmashou = styled.div<Props>`
  background-color: ${(props) => (props.isActive ? 'rebeccapurple' : '')};
  color: ${(props) => (props.isActive ? 'white' : '')};
`
