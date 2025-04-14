import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="flex gap-9">
      <Sidebar></Sidebar>
      <Tasks></Tasks>
    </div>
  )
}

export default App
