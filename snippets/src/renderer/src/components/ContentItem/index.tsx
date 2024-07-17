import { Delete } from '@icon-park/react'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'
import { NavLink, useSubmit } from 'react-router-dom'
interface Props {
  content: ContentType
}
export const ContentItem = ({ content }: Props) => {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  return (
    <NavLink
      to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
      key={content.id}
      className="flex justify-between items-center"
      onContextMenu={showContextMenu(
        [
          {
            key: 'remove',
            icon: <Delete theme="outline" size="18" strokeWidth={3} />,
            title: '删除片段',
            onClick: () => {
              submit({ id: content.id }, { method: 'DELETE' })
            }
          }
        ],
        { className: 'contextMenu' }
      )}
    >
      <div className="truncate">{content.title}</div>
      <div className="text-[10px] opacity-80">{dayjs(content.created_at).format('YY-MM-DD')}</div>
    </NavLink>
  )
}
