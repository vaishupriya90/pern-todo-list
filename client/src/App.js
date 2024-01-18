import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

const App = () => {
  const userEmail = 'vaishu@email.com'
  const [tasks, setTasks] = useState(null)
  const getData = async () => {
    try {
      const response = (
        await axios.get(`http://localhost:5000/todos/${userEmail}`)
      ).data
      setTasks(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => getData, [])

  console.log('tasks:', tasks)

  //sorted Tasks by date

  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='app'>
      <ListHeader listName={'🏖️ Holiday checklist!!!'} getData={getData} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  )
}

export default App
