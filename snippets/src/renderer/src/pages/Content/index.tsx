import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './content.scss'

export const Content = () => {
  const content = useLoaderData() as ContentType
  const submit = useSubmit()
  return (
    <Form method="PUT">
      <main className="content-page" key={content.id}>
        {/* <h1>{content.title}</h1> */}
        <input
          name="title"
          autoFocus
          defaultValue={content.title}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
        {/* <div className="content">{content.content}</div> */}
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
