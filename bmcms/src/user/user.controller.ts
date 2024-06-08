import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/auth.decorator'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('current')
  @Auth()
  info(@CurrentUser() user: User) {
    return user
  }
}
