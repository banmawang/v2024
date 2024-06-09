import { Body, Controller, Get, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/auth.decorator'
import { UserResponse } from './user.response'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserPassowrdDto } from './dto/password.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('current')
  @Auth()
  info(@CurrentUser() user: User) {
    const response = new UserResponse(user)
    return response.make()
  }

  @Put('update')
  @Auth()
  async update(@Body() dto: UpdateUserDto, @CurrentUser() user: User) {
    await this.userService.update(user.id, dto)
  }

  @Put('password')
  @Auth()
  async password(@Body() dto: UserPassowrdDto, @CurrentUser() user: User) {
    await this.userService.updatePassword(user.id, dto)
    return { message: '密码更新成功' }
  }
}
