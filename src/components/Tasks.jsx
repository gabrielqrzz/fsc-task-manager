import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import { useGetTasks } from '../hooks/data/use-get-tasks'
import AddTaskDialog from './AddTaskDialog'
import Button from './Button'
import Header from './Header'
import TaskItem from './TaskItem'
import TasksSeparator from './TasksSeparator'

const Tasks = () => {
  const { data: tasks } = useGetTasks()

  const morningTasks = tasks?.filter((tasks) => tasks.time === 'morning')
  const afternoonTasks = tasks?.filter((tasks) => tasks.time === 'afternoon')
  const eveningTasks = tasks?.filter((tasks) => tasks.time === 'evening')

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <Header subtitle="Minhas tarefas" title="Minhas tarefas" />
      <div className="rounded-xl bg-white p-6">
        <div className="my-6 space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />}></TasksSeparator>
          {morningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã.
            </p>
          )}
          {morningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator
            title="Tarde"
            icon={<CloudSunIcon />}
          ></TasksSeparator>
          {afternoonTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da tarde.
            </p>
          )}
          {afternoonTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />}></TasksSeparator>
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da noite.
            </p>
          )}
          {eveningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
