import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './content.scss'

export const Content = () => {
  const { content, categories } = useLoaderData() as {
    content: ContentType
    categories: CategoryType[]
  }
  const submit = useSubmit()
  return (
    <Form method="PUT">
      <main className="content-page" key={content.id}>
        <input
          name="title"
          autoFocus
          defaultValue={content.title}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
        <select
          name="category_id"
          value={content.category_id}
          onChange={(e) => {
            submit(e.target.form)
          }}
        >
          <option value="0">未分类</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          placeholder="请输入内容..."
          defaultValue={content.content}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
      </main>
    </Form>
  )
}
