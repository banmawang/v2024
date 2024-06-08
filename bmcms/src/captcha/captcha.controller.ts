import { Controller, Get } from '@nestjs/common'
import { CaptchaService } from './captcha.service'
import svgCaptcha from 'svg-captcha'

@Controller('captcha')
export class CaptchaController {
  constructor(private readonly captchaService: CaptchaService) {}

  @Get()
  create() {
    const captcha = svgCaptcha.createMathExpr({ mathMin: 0, mathMax: 9, color: true, height: 40, width: 120, noise: 4 })
    return {
      key: '',
      svg: captcha.data,
    }
  }
}
