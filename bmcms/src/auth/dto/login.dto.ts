import { PartialType } from '@nestjs/mapped-types'
import { RegisterDto } from './register.dto'
import { Allow, IsNotEmpty, Length } from 'class-validator'
import { IsExists } from 'src/validate/is-exists'

export class LoginDto extends PartialType(RegisterDto) {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 20, { message: '用户名长度为3-10个字符' })
  @IsExists('user', ['name', 'email', 'mobile'], { message: '用户不存在' })
  name: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(5, 20, { message: '密码不能小于5位' })
  password: string

  @Allow()
  captcha: object
}
