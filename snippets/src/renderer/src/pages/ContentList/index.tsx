import dayjs from 'dayjs'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './contentList.scss'

export const ContentList = () => {
  const contents = useLoaderData() as ContentType[]
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (contents.length) {
  //     const content = contents[0]
  //     navigate(`/config/category/contentList/${content.category_id}/content/${content.id}`)
  //   }
  // }, [contents])
  return (
    <main className="contentList-page">
      <div className="list">
        <div>
          {contents.map((content) => (
            <NavLink
              to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
              key={content.id}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="truncate">{content.title}</div>
              <div className="text-[10px] opacity-80">
                {dayjs(content.created_at).format('YYYY-MM-DD')}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
