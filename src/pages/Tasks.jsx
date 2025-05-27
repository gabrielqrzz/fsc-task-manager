import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'

function TasksPage() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Tasks></Tasks>
    </div>
  )
}

export default TasksPage
