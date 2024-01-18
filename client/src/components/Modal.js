import axios from 'axios'
import { useState } from 'react'

const Modal = ({ mode, setShowModal, task, getData }) => {
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : 'vaishu@email.com',
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? '' : new Date(),
  })

  const postData = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:5000/todos/create',
        {
          data: data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('response:', response)
      if (response.status === 201) {
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const editData = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:5000/todos/${task.id}`,
        {
          data: data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 200) {
        setShowModal(false)
        getData()
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((data) => ({
      ...data,
      [name]: value,
    }))
    console.log(data)
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} your task!!</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            minLength={3}
            placeholder='Enter your task here'
            name='title'
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label for='range'>Drag to select your current progress</label>
          <input
            id='range'
            required
            type='range'
            min={0}
            max={100}
            name='progress'
            value={data.progress}
            onChange={handleChange}
          />
          <br />
          <input
            className={mode}
            type='submit'
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  )
}

export default Modal
