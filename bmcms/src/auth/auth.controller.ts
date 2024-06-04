import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { CurrentUser } from './current-user.decorator'
import { User } from '@prisma/client'
import { Admin } from './admin.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  /**
   * 注册
   * @param dto 校验规则
   * @returns 注册的用户信息
   */
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto)
  }

  /**
   * 登录
   * @param dto 校验规则
   * @returns token
   */
  @Post('login')
  login(@Body() dto: LoginDto) {
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
