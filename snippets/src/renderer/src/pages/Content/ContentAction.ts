import { redirect } from 'react-router-dom'

export default async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.assign(Object.fromEntries(formData), { id: params.id })
  await window.api.sql(
    `update contents set title=@title,content=@content,category_id=@category_id where id=@id`,
    'update',
    data
  )
  return redirect(`/config/category/contentList/${data.category_id}/content/${data.id}`)
}
