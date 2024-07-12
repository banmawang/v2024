import useCodeSelect from '@renderer/hooks/useCodeSelect'
import './styles.scss'
import classNames from 'classnames'

export default function Result(): JSX.Element {
  const { data, id, selectItem } = useCodeSelect()
  return (
    <main className="result">
      {data.map((item) => (
        <div
          key={item.id}
          className={classNames({ active: item.id === id })}
          onClick={() => {
            selectItem(item.id)
          }}
        >
          {item.content}
        </div>
      ))}
    </main>
  )
}
