import { Injectable } from '@nestjs/common'
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
        user: true,
      },
    })
  }

  findAll(sid: number) {
    return this.prisma.comment.findMany({
      where: {
        softId: +sid,
      },
      include: { user: true, replys: true },
    })
  }

  remove(id: number) {
    return this.prisma.comment.deleteMany({ where: { id: id } })
  }
}
