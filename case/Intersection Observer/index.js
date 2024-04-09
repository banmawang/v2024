const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      ob.unobserve(img) // 取消图片监听
    }
  }
}, {
  // root: null,
  // rootMargin: '0px',
  threshold: 0
})

const imgs = document.querySelectorAll('img[data-src]')

imgs.forEach((img) => {
  ob.observe(img)
})
