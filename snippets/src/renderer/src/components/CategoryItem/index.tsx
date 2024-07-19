import { FolderClose } from '@icon-park/react'
import useCategory from '@renderer/hooks/useCategory'
import { useStore } from '@renderer/store/useStore'
import { NavLink, useFetcher } from 'react-router-dom'
import styles from './styles.module.scss'
interface Props {
  category: CategoryType
}
export const CategoryItem = ({ category }: Props) => {
  const { editCategoryId, setEditCategoryId } = useStore()
  const fetcher = useFetcher()
  const { contextMenu, dragHandle } = useCategory(category)
  const linkStyle = (isActive: boolean) => {
    return isActive ? styles.active : styles.link
  }
  return (
    <>
      {editCategoryId == category.id ? (
        <div className={styles.input}>
          <input
            defaultValue={category.name}
            name="name"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetcher.submit({ id: category.id, name: e.currentTarget.value }, { method: 'PUT' })
                setEditCategoryId(0)
              }
            }}
            onBlur={() => {
              setEditCategoryId(0)
            }}
          />
        </div>
      ) : (
        <NavLink
          onDoubleClick={() => {
            setEditCategoryId(category.id)
          }}
          to={`/config/category/contentList/${category.id}`}
          key={category.id}
          className={({ isActive }) => linkStyle(isActive)}
          onContextMenu={contextMenu()}
          {...dragHandle}
        >
          <div className="flex items-center gap-1">
            <FolderClose theme="outline" size="12" strokeWidth={3} />
            <div className="truncate">{category.name}</div>
          </div>
        </NavLink>
      )}
    </>
  )
}
