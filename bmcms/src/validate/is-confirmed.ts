import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

// 表字段是否唯一
export function IsConfirmed(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsConfirmed',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          return value == args.object[`${propertyName}_confirmation`]
        },
      },
    })
  }
}
