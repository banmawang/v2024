import { Allow, IsNotEmpty } from 'class-validator'

export class CreateCommentDto {
  @IsNotEmpty({ message: '评论内容不能为空' })
  // @Length(10, 1000, { message: '评论内容不能少于10个字符' })
  content: string

  @Allow()
  repliedUserName?: string

  @Allow()
  commentId?: number
}
