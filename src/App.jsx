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
    date:"2021-01-01",
    recentlyDone: false,
    cleanTime: 0,
  },
  {
   id:nanoid(),
   active: false,
   task: "Clean Bath",
   room: "kitchen",
   cleanedStatus: "scheduled",
   responsible: "Philipp",
   date: "2021-01-01",
   recentlyDone: false,
   cleanTime: 0,
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

const openTasks = cleaningTasks.filter(task => task.recentlyDone === false)
const filteredTasks = cleaningTasks.filter(task => task.recentlyDone === true)



const today = new Date().getTime()

const oneDay = 86400000
const oneWeek = oneDay *7


// das geht so nicht :/
function reapplyTask(id, date) {
  const reapplyTask = cleaningTasks.find(task => {
   if(task.id === id && today - parseInt(date).getTime() >= oneWeek) {
      console.log(reapplyTask)
    }
  })
} 
reapplyTask()


function completeTask (id, responsible, date, cleanTime) {
  const updatedTasks = cleaningTasks.map(task => {
  if(task.id === id) {
      return {...task, recentlyDone: true, responsible, date, cleanTime }
    } else {
      return task
    }
  })
  setCleaningTasks(updatedTasks)
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
      {openTasks.map((task) => {
      return<Task key={task.id} id={task.id} task={task.task} cleanTime={task.cleanTime} lastCleanDate={task.lastCleanDate} completeTask={completeTask} recentlyDone={task.recentlyDone} name={task.responsible} responsible={task.responsible} date={task.date}></Task>})}
    </section>
    <section>
      <p>Recently done</p>
      {filteredTasks.map((task) => {return <Task key={task.id} task={task.task} lastCleanDate={task.lastCleanDate} recentlyDone={task.recentlyDone} name={task.responsible} responsible={task.responsible} date={task.date}></Task>})}
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
