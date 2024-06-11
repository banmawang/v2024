import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { POLICY_KEY } from './policy.decorator'

@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const policyClass = this.reflector.get<any>(POLICY_KEY, context.getHandler()) as new () => any
    const method = context.getHandler().name
    const policyInstance = new policyClass() // 使用类的构造函数创建新实例
    return policyInstance[method]()
  }
}
