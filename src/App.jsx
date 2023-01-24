import "./app.css";
import { nanoid } from "nanoid";

import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import Navigation from "./components/Navigation/Navigation";
import CreateTaskPage from "./pages/CreateTaskPage";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

function App() {
  const [cleaningTasks, setCleaningTasks] = useLocalStorage("task", []);

  const today = new Date().getTime();
  const oneDay = 86400000;
  const oneWeek = oneDay * 7;

  useEffect(() => {
    reapplyTask();
  }, []);

  function reapplyTask() {
    const taskRenewal = cleaningTasks.map((task) => {
      const taskDate = task.date;
      const taskDateInMs = new Date(taskDate).getTime();
      if (today - taskDateInMs > oneWeek) {
        return { ...task, recentlyDone: false };
      } else {
        return { ...task};
      }
    });
    setCleaningTasks(taskRenewal);
  }

  function addNewCleaningTask(task, room, responsible, repeat, date) {
    const newTask = [
      {
        id: nanoid(),
        task,
        room,
        responsible,
        repeat,
        date,
        recentlyDone: false,
      },
      ...cleaningTasks,
    ];
    setCleaningTasks(newTask);
  }

  const openTasks = cleaningTasks.filter((task) => task.recentlyDone === false);
  const filteredTasks = cleaningTasks.filter(
    (task) => task.recentlyDone === true
  );


  function deleteTask (id) {
    const updatedTasks = cleaningTasks.filter(task => {
      return task.id !== id
    })
    setCleaningTasks(updatedTasks)
  }


  function completeTask(id, responsible, date, cleanTime) {
    const updatedTasks = cleaningTasks.map((task) => {
      if (task.id === id) {
        return { ...task, recentlyDone: true, responsible, date, cleanTime };
      } else {
        return task;
      }
    });
    setCleaningTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section>
                <h1>Hello UserName - test 1234 </h1>
              </section>
              <section>
                <p>Hier kommt die Statistic hin</p>
              </section>
              <section>
                <p>Es ist Zeit für...</p>
                {openTasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      id={task.id}
                      task={task.task}
                      cleanTime={task.cleanTime}
                      lastCleanDate={task.lastCleanDate}
                      completeTask={completeTask}
                      recentlyDone={task.recentlyDone}
                      room={task.room}
                      name={task.responsible}
                      responsible={task.responsible}
                      date={task.date}
                      deleteTask={deleteTask}
                    ></Task>
                  );
                })}
              </section>
              <div className="separator"></div>
              <section>
                <p>Recently done</p>
                {filteredTasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      id={task.id}
                      task={task.task}
                      lastCleanDate={task.lastCleanDate}
                      recentlyDone={task.recentlyDone}
                      name={task.responsible}
                      responsible={task.responsible}
                      date={task.date}
                      room={task.room}
                      deleteTask={deleteTask}
                    ></Task>
                  );
                })}
              </section>
            </main>
          }
        />
        <Route
          path="/newtask"
          element={<CreateTaskPage addNewCleaningTask={addNewCleaningTask} />}
        />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
