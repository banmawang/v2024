import { CodeContext } from '@renderer/context/CodeContext'
import { useContext } from 'react'

export default () => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('CodeContext.provider 定位错误')
  }
  return { ...context }
}
