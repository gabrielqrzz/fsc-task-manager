import { HomeIcon, TasksIcon } from '../assets/icons'
import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className="h-screen min-w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-lg font-semibold text-brand-primary">
          Task Master
        </h1>
        <p>
          Um simples{' '}
          <span className="text-brand-primary">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton to="/">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton to="/tasks">
          <TasksIcon />
          Minhas tarefas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
