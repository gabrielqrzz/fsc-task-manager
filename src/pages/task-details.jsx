import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'GET',
      })
      const data = await response.json()
      setTask(data)
    }
    fetchTask()
  }, [taskId])
  return (
    <div>
      {task?.title}
      {task?.description}
    </div>
  )
}

export default TaskDetailsPage
