import { IsNotEmpty } from 'class-validator'
import { IsConfirmed } from 'src/validate/is-confirmed'

export class UserPassowrdDto {
  @IsNotEmpty({ message: '密码不能为空' })
  @IsConfirmed({ message: '两次输入的密码不一致' })
  password: string
}
