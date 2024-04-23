class FlipClock extends FlipNumber {
  main
  divs
  intervalId
  constructor(options) {
    super(options)
    this.main = document.querySelector(options.el)
    this.addCssElement()
  }

  // 添加css样式
  addCssElement() {
    document.head.insertAdjacentHTML(
      'afterbegin',
      `
      <link rel="stylesheet" href="${this.options.style}.css" />
      `,
    )
  }

  // 定时器
  render() {
    this.clock()
    this.intervalId = setInterval(() => {
      this.getNums()
      this.updateDivNumber()
      if (this.nums.filter((n) => n > 0).length == 0) {
        clearInterval(this.intervalId)
      }
    }, 500)
  }

  // 执行div的渲染
  updateDivNumber() {
    this.divs.forEach((divs, index) => {
      const div = divs[1]
      const { before, after } = this.getNextNum(index)
      if (Number(div.dataset.before) !== before) {
        div.classList.add('flipDown')
      }
      div.addEventListener('animationend', () => {
        divs.forEach((div) => {
          div.dataset.before = before
          div.dataset.after = after
        })
        div.classList.remove('flipDown')
      })
    })
  }

  // 初始化
  clock() {
    this.getNums()
    this.createSectionElement()
    this.getDivs()
  }

  // 获取div数量
  getDivs() {
    this.divs = Array.from(this.main.querySelectorAll('section')).map((section) => section.querySelectorAll('div'))
  }

  // 创建元素
  createSectionElement() {
    this.nums.forEach((num, index) => {
      const { before, after } = this.getNextNum(index)
      this.main.insertAdjacentHTML(
        'beforeend',
        `
        <section>
          <div data-before="${before}" data-after="${after}"></div>
          <div data-before="${before}" data-after="${after}"></div>
        </section> 
        `,
      )
      if (index % 2 && index != this.nums.length - 1) {
        this.main.insertAdjacentHTML('beforeend', '<p></p>')
      }
    })
  }
}
