import useCodeSelect from '@renderer/hooks/useCodeSelect'
import './styles.scss'
import classNames from 'classnames'

export default function Result(): JSX.Element {
  const { data, currentIndex } = useCodeSelect()
  return (
    <main className="result">
      {data.map((item, index) => (
        <div key={item.id} className={classNames({ active: currentIndex == index })}>
          {item.content}
        </div>
      ))}
    </main>
  )
}
