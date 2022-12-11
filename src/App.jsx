import Header from './components/Header/Header'
import Task from './components/Task/Task'
import Navigation from './components/Navigation/Navigation'


const testArray = [
  {
    id:"1",
    active: false,
    icon: "icon",
    task: "Clean Kitchen",
    cleanedLast: "03.03.2022",
    cleanedStatus: "done",
    responsible: "name",
  },
  {
   id:"2",
   active: true,
   icon: "icon",
   task: "Clean Bath",
   cleanedLast: "02.02.2022",
   cleanedStatus: "scheduled",
   responsible: "name",
   },
   {
   id:"3",
   active: false,
   icon: "icon",
   task: "Clean Living Room",
   cleanedLast: "01.01.2022",
   cleanedStatus: "important",
   responsible: "name",
    },
]


function App() {
  return (
    <section className="App">
   <Header/>
      <h1>Your current tasks</h1>
      {testArray.map((task) => {
      return<Task key={task.id} active={task.active} icon={task.icon} task={task.task} cleanedLast={task.cleanedLast} cleanedStatus={task.cleanedStatus} responsible={task.responsible}></Task>})}
      <Navigation/>
    </section>
  )
}

export default App
