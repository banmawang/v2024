import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { hash, verify } from 'argon2'
import { LoginDto } from './dto/login.dto'
import { validateFail } from 'src/helper'
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  /**
   * 注册
   * @param dto
   * @returns user
   */
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return user
  }

  /**
   * 获取token
   * @param user 用户信息
   * @returns token
   */
  private token(user: User) {
    return {
      token: this.jwt.sign({ id: user.id }),
    }
  }

  /**
   * 登录
   * @param dto
   * @returns token
   */
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ name: dto.name }, { email: dto.name }, { mobile: dto.name }],
      },
    })

    // if (!user) validateFail('name', '帐号不存在')
    if (!(await verify(user.password, dto.password))) {
      validateFail('password', '帐号密码错误')
    }

    return this.token(user)
  }
}
