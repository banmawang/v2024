import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search(): JSX.Element {
  const { search, handleSearch } = useSearch()
  return (
    <div className="bg-slate-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg flex items-center gap-1 nodrag">
        <SettingOne
          theme="outline"
          size="22"
          fill="#34495e"
          strokeWidth={4}
          className="cursor-pointer"
          onClick={() => window.api.openWindow('config')}
        />
        <Input value={search} onChange={handleSearch} autoFocus />
      </section>
      {/* <section className="text-center text-slate-600 text-xs mt-2">斑马兽作品</section> */}
    </div>
  )
}
