import useSelect from '@renderer/hooks/useSelect'
import classNames from 'classnames'
import './styles.scss'

export default function Result(): JSX.Element {
  const { data, id, selectItem } = useSelect()
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
          {item.title}
        </div>
      ))}
    </main>
  )
}
