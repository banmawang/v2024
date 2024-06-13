import { http } from '@/plugins/axios'
import { ElMessageBox } from 'element-plus'

export default (sid: number) => {
  const collections = ref<CommentModel[]>([])
  const model = ref<Partial<CommentModel>>({})

  const findAll = async () => {
    collections.value = await http.request({
      url: `comment/${sid}`,
    })
  }

  const add = async (data: CommentModel) => {
    const comment = await http.request<CommentModel>({
      url: `comment/${sid}`,
      method: 'POST',
      data,
    })
    model.value.content = ''
    if (data.commentId) {
      collections.value.find((item) => item.id == data.commentId)?.replys.push(comment)
    } else {
      collections.value.push(comment)
    }
  }

  const del = async (id: number) => {
    await ElMessageBox.confirm('删除评论将无法恢复。确认删除？', '提示', {
      type: 'warning',
    })
    await http.request({
      url: `comment/${sid}/${id}`,
      method: 'DELETE',
    })
    const index = collections.value.findIndex((item) => item.id == id)
    collections.value.splice(index, 1)
  }

  return { findAll, add, del, collections, model }
}
