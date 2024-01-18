import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Modal from './Modal'
import TickIcon from './TickIcon'

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} getData={getData}/>}
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
        <button className='delete'>Delete</button>
      </div>
    </li>
    </>
  )
}

export default ListItem
