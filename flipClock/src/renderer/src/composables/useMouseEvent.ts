export default () => {
  const setIgnoreMouseEvents = () => {
    // 鼠标放在app上关闭穿透
    const el = document.querySelector('#app')! as HTMLDivElement
    el.addEventListener('mouseenter', () => {
      window.api.setIgnoreMouseEvents(false)
    })

    // 鼠标放在body上开启穿透
    document.body.addEventListener('mouseover', (event: MouseEvent) => {
      if (event.target == document.body) {
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }
  return { setIgnoreMouseEvents }
}
