import { Injectable } from '@nestjs/common'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { PrismaService } from 'src/common/prisma.service'
import { User } from '@prisma/client'
import { CreateCommentDto } from './dto/create-comment.dto'

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto, user: User, sid: number) {
    const { commentId, ...dto } = createCommentDto
    return this.prisma.comment.create({
      data: {
        ...dto,
        soft: { connect: { id: +sid } },
        user: { connect: { id: user.id } },
        reply: commentId && { connect: { id: +commentId } },
      },
      include: {
        replys: true,
      },
    })
  }

  findAll() {
    return `This action returns all comment`
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`
  }

  remove(id: number) {
    return `This action removes a #${id} comment`
  }
}
