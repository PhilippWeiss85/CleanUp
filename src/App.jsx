import "./app.css"

import Header from './components/Header/Header'
import Task from './components/Task/Task'
import Navigation from './components/Navigation/Navigation'
import CreateTaskPage from "./pages/CreateTaskPage"

import { Routes, Route } from "react-router-dom"


const testArray = [
  {
    id:"1",
    active: false,
    icon: "icon",
    task: "Clean Kitchen",
    cleanedLast: "03.03.2022",
    cleanedStatus: "done",
    responsible: "Anita",
  },
  {
   id:"2",
   active: true,
   icon: "icon",
   task: "Clean Bath",
   cleanedLast: "02.02.2022",
   cleanedStatus: "scheduled",
   responsible: "Philipp",
   },
   {
   id:"3",
   active: false,
   icon: "icon",
   task: "Clean Living Room",
   cleanedLast: "01.01.2022",
   cleanedStatus: "important",
   responsible: "Random",
    },
]


function App() {
  return (
    <>
  <Header/>
   <Routes>
    <Route path="/"
    element={
      <main>
      <section>
      <h1>Hello UserName</h1>
      </section>
      <section>
        <p>Hier kommt die Statistic hin</p>
      </section>
      <section>
      <p>Es ist Zeit für...</p>
      {testArray.map((task) => {
      return<Task key={task.id} active={task.active} icon={task.icon} task={task.task} cleanedLast={task.cleanedLast} cleanedStatus={task.cleanedStatus} responsible={task.responsible}></Task>})}
    </section>
    </main>
    }/>
    <Route path="/newtask"
    element={
      <CreateTaskPage/>
    }
    />
    </Routes>
    <Navigation/>
    </>  
  )
}

export default App
