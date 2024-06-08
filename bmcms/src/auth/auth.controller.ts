import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { CurrentUser } from './current-user.decorator'
import { User } from '@prisma/client'
import { Admin } from './admin.decorator'
import { CaptchaService } from 'src/captcha/captcha.service'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly captcha: CaptchaService,
  ) {}
  /**
   * 注册
   * @param dto 校验规则
   * @returns 注册的用户信息
   */
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    await this.captcha.verify(dto.captcha as any)
    return this.authService.register(dto)
  }

  /**
   * 登录
   * @param dto 校验规则
   * @returns token
   */
  @Post('login')
  async login(@Body() dto: LoginDto) {
    await this.captcha.verify(dto.captcha as any)
    return this.authService.login(dto)
  }

  /**
   * 超级管理员
   * @param user 用户信息
   * @returns 用户信息
   */
  @Get('test')
  @Admin()
  test(@CurrentUser() user: User) {
    return user
  }
}
