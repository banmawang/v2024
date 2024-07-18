import { Delete, FolderClose } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { NavLink, useSubmit } from 'react-router-dom'
import styles from './styles.module.scss'
interface Props {
  category: CategoryType
}
export const CategoryItem = ({ category }: Props) => {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  const linkStyle = (isActive: boolean) => {
    return isActive ? styles.active : styles.link
  }
  return (
    <NavLink
      to={`/config/category/contentList/${category.id}`}
      key={category.id}
      className={({ isActive }) => linkStyle(isActive)}
      onContextMenu={showContextMenu(
        [
          {
            key: 'remove',
            icon: <Delete theme="outline" size="18" strokeWidth={3} />,
            title: '删除分类',
            onClick: () => {
              submit({ id: category.id }, { method: 'DELETE' })
            }
          }
        ],
        { className: 'contextMenu' }
      )}
    >
      <div className="flex items-center gap-1">
        <FolderClose theme="outline" size="12" strokeWidth={3} />
        <div className="truncate">{category.name}</div>
      </div>
    </NavLink>
  )
}
