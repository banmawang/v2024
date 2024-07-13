import { ChangeEvent } from 'react'
import { codes } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'

export default () => {
  const { setData } = useStore((state) => state)
  const { search, setSearch } = useStore()
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setData(
      codes
        .filter((code) => code.content.toLowerCase().includes(e.target.value.toLowerCase()))
        .splice(0, 8)
    )
  }
  return { search, handleSearch }
}
