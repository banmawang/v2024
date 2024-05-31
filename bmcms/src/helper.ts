import { BadRequestException } from '@nestjs/common'

/**
 * 用于抛出400错误
 * @param field 字段名
 * @param message 错误信息
 */
export const validateFail = (field: string, message: string) => {
  throw new BadRequestException({
    error: 'Bad Request',
    message: [
      {
        field,
        message,
      },
    ],
    statusCode: 400,
  })
}
