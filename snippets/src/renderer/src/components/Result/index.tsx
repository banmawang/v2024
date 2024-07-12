import useCodeSelect from '@renderer/hooks/useCodeSelect'
import './styles.scss'
import classNames from 'classnames'

export default function Result(): JSX.Element {
  const { data, id } = useCodeSelect()
  return (
    <main className="result">
      {data.map((item) => (
        <div key={item.id} className={classNames({ active: item.id === id })}>
          {item.content}
        </div>
      ))}
    </main>
  )
}
