import { IsNotEmpty, Length, Matches } from 'class-validator'
import { IsNotExists } from 'src/validate/is-not-exists'

export class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 10, { message: '用户名长度为3-10个字符' })
  @Matches(/^[a-z]+$/i, { message: '请输入英文字母' })
  @IsNotExists('user', ['name', 'email', 'mobile'], { message: '帐号已经存在' })
  name: string
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(3, 20, { message: '密码长度为3-10个字符' })
  password: string
}
