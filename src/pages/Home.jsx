import DashboardCards from '../components/DashboardCards'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import TaskItem from '../components/TaskItem'
import { useGetTasks } from '../hooks/data/use-get-tasks'

const HomePage = () => {
  const { data: tasks } = useGetTasks()
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-full space-y-6 px-8 py-16">
        <Header subtitle="Dashboard" title="Dashboard"></Header>
        <DashboardCards />
        <div className="grid-cols-[2fr, 1fr] grid">
          <div className="space-y-6 rounded-[10px] bg-white p-6">
            <div>
              <h3 className="text-xl font-semibold">Tarefas</h3>
              <span className="text-sm text-brand-dark-gray">
                Resumo das tarefas disponíveis
              </span>
            </div>

            <div className="space-y-3">
              {tasks?.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
