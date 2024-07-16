import { Form, useLoaderData } from 'react-router-dom'
import './content.scss'

export const Content = () => {
  const content = useLoaderData() as ContentType
  return (
    <Form method="PUT">
      <main className="content-page" key={content.id}>
        {/* <h1>{content.title}</h1> */}
        <input name="title" defaultValue={content.title} />
        {/* <div className="content">{content.content}</div> */}
        <textarea name="content" defaultValue={content.content} />
        <div className="border-t flex items-center justify-center">
          <button>保存</button>
        </div>
      </main>
    </Form>
  )
}
