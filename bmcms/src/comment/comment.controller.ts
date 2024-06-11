import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/auth.decorator'
import { Policy } from 'src/policy/policy.decorator'
import { CommentPolicy } from './comment.policy'
import { PolicyGuard } from 'src/policy/policy.guard'

@Controller('comment/:sid')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @Auth()
  create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() user: User, @Param('sid') sid: number) {
    return this.commentService.create(createCommentDto, user, sid)
  }

  @Get()
  findAll(@Param('sid') sid: number) {
    return this.commentService.findAll(+sid)
  }

  @Delete(':id')
  @UseGuards(PolicyGuard)
  @Policy(CommentPolicy)
  @Auth()
  async remove(@Param('id') id: string, @CurrentUser() user: User) {
    // return this.commentService.remove(+id)
    return 'abc'
  }
}
