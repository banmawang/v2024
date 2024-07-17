import { redirect } from 'react-router-dom'

export default async ({ request, params }) => {
  const cid = params.cid || 0
  const formData = await request.formData()
  switch (formData.get('action')) {
    case 'add': {
      const id = await window.api.sql(
        `insert into contents (title,content,category_id,created_at) values('未命名片段','',${cid},dateTime())`,
        'insert'
      )
      return redirect(`content/${id}`)
    }
  }
  return {}
}
