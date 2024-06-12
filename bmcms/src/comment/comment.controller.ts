import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/auth.decorator'
import { Policy } from 'src/policy/policy.decorator'
import { CommentPolicy } from './comment.policy'
import { PolicyGuard } from 'src/policy/policy.guard'
import { CommentResponse } from './comment.response'

@Controller('comment/:sid')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @Auth()
  async create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() user: User, @Param('sid') sid: number) {
    const comment = await this.commentService.create(createCommentDto, user, sid)
    return new CommentResponse(comment).make()
  }

  @Get()
  async findAll(@Param('sid') sid: number) {
    const comments = await this.commentService.findAll(+sid)
    return comments.map((comment) => {
      return new CommentResponse(comment).make()
    })
  }

  @Delete(':id')
  @UseGuards(PolicyGuard)
  @Policy(CommentPolicy)
  @Auth()
  async remove(@Param('id') id: string) {
    return this.commentService.remove(+id)
  }
}
