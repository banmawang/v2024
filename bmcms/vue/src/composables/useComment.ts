import { http } from '@/plugins/axios'

export default (sid: number) => {
  const collections = ref<CommentModel[]>([])
  const model = ref<Partial<CommentModel>>({})

  const findAll = async () => {
    collections.value = await http.request({
      url: `comment/${sid}`,
    })
  }

  const add = async () => {
    await http.request({
      url: `comment/${sid}`,
      method: 'POST',
      data: model.value,
    })
    location.reload()
  }

  const del = async (id: number) => {
    await http.request({
      url: `comment/${sid}/${id}`,
      method: 'DELETE',
    })
  }

  return { findAll, add, del, collections, model }
}
