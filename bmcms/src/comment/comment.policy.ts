import { IPolicy } from 'src/policy/policy.decorator'

export class CommentPolicy implements IPolicy {
  remove() {
    return true
  }
}
