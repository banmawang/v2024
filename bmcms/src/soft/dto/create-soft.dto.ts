import { IsNotEmpty } from 'class-validator'

export class CreateSoftDto {
  @IsNotEmpty({ message: '软件名称不能为空' })
  title: string

  @IsNotEmpty({ message: '软件说明不能为空' })
  content: string

  @IsNotEmpty({ message: '软件图片不能为空' })
  preview: string

  @IsNotEmpty({ message: '软件简介不能为空' })
  description: string
}
