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
    id: nanoid(),
    active: false,
    task: "Clean Kitchen",
    room: "kitchen",
    cleanedStatus: "done",
    responsible: "Anita",
    date:"01.01.2021",
  },
  {
   id:nanoid(),
   active: false,
   task: "Clean Bath",
   room: "kitchen",
   cleanedStatus: "scheduled",
   responsible: "Philipp",
   date: "01.01.2021",
   }
]


function App() {
const [cleaningTasks, setCleaningTasks] = useState(testArray)


function addNewCleaningTask (task, room, responsible, repeat, date) {
  const newTask = [
    {
    id: nanoid(),
    task,
    room,
    responsible,
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
      return<Task key={task.id} task={task.task} name={task.responsible} room={task.room} cleanedStatus={task.cleanedStatus} responsible={task.responsible} date={task.date}></Task>})}
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
