export default () => {
  const register = (type: 'search', shortCut: string = 'ctrl+shift+;') => {
    window.api.shortCut(type, shortCut)
  }
  return { register }
}
