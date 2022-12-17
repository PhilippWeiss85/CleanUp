import "./app.css"
import { nanoid } from "nanoid"

import Header from './components/Header/Header'
import Task from './components/Task/Task'
import Navigation from './components/Navigation/Navigation'
import CreateTaskPage from "./pages/CreateTaskPage"

import { Routes, Route } from "react-router-dom"
import { useState } from "react"


const testArray = [
  {
    id:nanoid(),
    active: false,
    icon: "icon",
    task: "Clean Kitchen",
    cleanedLast: "03.03.2022",
    cleanedStatus: "done",
    responsible: "Anita",
  },
  {
   id:nanoid(),
   active: true,
   icon: "icon",
   task: "Clean Bath",
   cleanedLast: "02.02.2022",
   cleanedStatus: "scheduled",
   responsible: "Philipp",
   },
   {
   id:nanoid(),
   active: false,
   icon: "icon",
   task: "Clean Living Room",
   cleanedLast: "01.01.2022",
   cleanedStatus: "important",
   responsible: "Random",
    },
]


function App() {
const [cleaningTasks, setCleaningTasks] = useState(testArray)

function addNewCleaningTask (task, room, repeat, date) {
  const newTask = [
    {
    id: nanoid(),
    task,
    room,
    repeat,
    date,
    }
    ,...cleaningTasks];
    setCleaningTasks(newTask);
}


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
      {cleaningTasks.map((task) => {
      return<Task key={task.id} active={task.active} icon={task.icon} task={task.task} cleanedLast={task.cleanedLast} cleanedStatus={task.cleanedStatus} responsible={task.responsible}></Task>})}
    </section>
    </main>
    }/>
    <Route path="/newtask"
    element={
      <CreateTaskPage addNewCleaningTask={addNewCleaningTask} />
    }
    />
    </Routes>
    <Navigation/>
    </>  
  )
}

export default App
