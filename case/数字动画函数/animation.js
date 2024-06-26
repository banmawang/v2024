function animation(duration, from, to, onProgress) {
  let value = from
  const speed = (to - from) / duration
  const start = Date.now()
  // 让 value 的值前进一点
  function _run() {
    // 改变value的值
    const t = Date.now() - start
    if (t >= duration) {
      value = to
      onProgress(value)
      return
    }
    // 起点 + 时间 * 速度
    value = from + t * speed
    onProgress(value)
    // 注册下一次的改变
    requestAnimationFrame(_run)
  }
  _run()
}
