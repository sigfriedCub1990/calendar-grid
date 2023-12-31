import * as React from 'react'
import './App.css'

type Person = {
  id: number
  name: string
}

type DayProps = {
  day: number
}

const getPeople = (): Array<Person> => {
  return [
    { id: 1, name: 'Alan Turing' },
    { id: 2, name: 'John von Neumman' },
    { id: 3, name: 'Edger W. Dijkstra' },
    { id: 4, name: 'Allan Parsons' },
    { id: 5, name: 'Pat Metteny' },
  ]
}

const getNumberOfDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 0)
  return date.getDate()
}

const getDaysInMonth = () => {
  const today = new Date()
  const numberOfDays = getNumberOfDaysInMonth(
    today.getFullYear(),
    today.getMonth() + 1
  )
  const arr = new Array(numberOfDays)
  const filled = arr.fill(0).map((_, index) => index + 1)
  return filled
}

const Day = ({ day }: DayProps) => {
  return <label key={day} className='day__user'></label>
}

function App() {
  const [people] = React.useState<Array<Person>>(getPeople)
  const [days] = React.useState<Array<number>>(getDaysInMonth)

  return (
    <>
      <h1>Calendar example</h1>
      <div className='calendar'>
        <label className='legend'>Names/Day</label>
        {days.map((day) => (
          <label className='day' key={day}>
            {day}
          </label>
        ))}
        {people.map((person) => {
          return (
            <>
              <div className='name'>
                <label>{person.name}</label>
              </div>
              {days.map((day) => (
                <Day key={day} day={day} />
              ))}
            </>
          )
        })}
      </div>
    </>
  )
}

export default App
