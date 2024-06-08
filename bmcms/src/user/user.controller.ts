import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/auth.decorator'
import { UserResponse } from './user.response'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('current')
  @Auth()
  info(@CurrentUser() user: User) {
    const response = new UserResponse(user)
    return response.make()
  }
}
