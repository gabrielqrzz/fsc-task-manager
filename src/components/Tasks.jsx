import Button from './Button'
import AddIcon from '../assets/icons/add.svg?react'
import TrashIcon from '../assets/icons/trash.svg?react'
import SunIcon from '../assets/icons/sun.svg?react'
import CloudsunIcon from '../assets/icons/cloud-sun.svg?react'
import MoonIcon from '../assets/icons/moon.svg?react'
import TasksSeparator from './TasksSeparator'
import { useState } from 'react'
import TASKS from '../constants/task'
import TaskItem from './TaskItem'

const Tasks = () => {
  const [tasks] = useState(TASKS)

  const morningTasks = tasks.filter((tasks) => tasks.time === 'morning')
  const afternoonTasks = tasks.filter((tasks) => tasks.time === 'afternoon')
  const eveningTasks = tasks.filter((tasks) => tasks.time === 'evening')

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefa
            <TrashIcon></TrashIcon>
          </Button>
          <Button>
            Nova tarefa
            <AddIcon></AddIcon>
          </Button>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6">
        <div className="my-6 space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />}></TasksSeparator>
          {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator
            title="Tarde"
            icon={<CloudsunIcon />}
          ></TasksSeparator>
          {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />}></TasksSeparator>
          {eveningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
