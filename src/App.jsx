import './App.css'
import Task from './components/Task/Task'
import Navigation from './components/Navigation/Navigation'


const testArray = [
  {
    active: false,
    icon: "url",
    name: "Clean Kitchen",
    cleanedLast: "xxx",
    cleanedStatus: "done",
    responsible: "name",
    },
    {
      active: false,
      icon: "url",
      name: "Clean Kitchen",
      cleanedLast: "xxx",
      cleanedStatus: "done",
      responsible: "name",
      },
      {
        active: false,
        icon: "url",
        name: "Clean Kitchen",
        cleanedLast: "xxx",
        cleanedStatus: "done",
        responsible: "name",
        },
        {
          active: false,
          icon: "url",
          name: "Clean Kitchen",
          cleanedLast: "xxx",
          cleanedStatus: "done",
          responsible: "name",
          }
]


function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1>HALLO</h1>
      {testArray.map((task) => {
      return <Task active={task.active} icon={task.icon} name={task.name} cleanedLast={task.cleanedLast} cleanedStatus={task.cleanedStatus} responsible={task.responsible}></Task>})}
    </div>
  )
}

export default App
