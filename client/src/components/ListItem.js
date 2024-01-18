import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Modal from './Modal'
import TickIcon from './TickIcon'
import axios from 'axios'

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false)
  const deleteTodo = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/todos/${task.id}`
      )
      console.log('delete response: ', response)
      if (response.status === 204) {
        getData()
      }
    } catch (error) {}
  }
  return (
    <>
      {showModal && (
        <Modal
          mode={'edit'}
          setShowModal={setShowModal}
          task={task}
          getData={getData}
        />
      )}
      <li className='list-item'>
        <div className='info-container'>
          <TickIcon />
          <p className='task-title'>{task.title}</p>
          <ProgressBar />
        </div>
        <div className='button-container'>
          <button className='edit' onClick={() => setShowModal(true)}>
            Edit
          </button>
          <button className='delete' onClick={deleteTodo}>
            Delete
          </button>
        </div>
      </li>
    </>
  )
}

export default ListItem
