import "./Task.css"
import TaskModal from "../Modal/TaskModal"
import { useState } from "react"


function Task ({task, responsible, date, recentlyDone, completeTask, id, cleanTime}) {
    const [activeTask, setactiveTask] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    function toggleActive () {
        setactiveTask(true)
        setModalActive(true)
    } 

      function closeModal () {
        setModalActive(!modalActive)
    }

    return (
        <section className="taskcontainer">
            {modalActive && <TaskModal toggleActive={toggleActive} id={id} completeTask={completeTask} closeModal={closeModal} task={task} recentlyDone={recentlyDone} responsible={responsible} cleanTime={cleanTime} date={date}/>}
            <article className="taskcontainer-content taskcontainer-content--left">
                <div>
                {recentlyDone === true ?
                <input type="checkbox"  id="taskcompleted" name="taskcompleted" defaultChecked></input>
                :
                <input type="checkbox"  id="taskcompleted" name="taskcompleted" onClick={toggleActive}></input>
                }
                </div>
                <div>
                <p className="task--headline">{task}</p>
                </div>
                </article>
                <article className="taskcontainer-content taskcontainer-content--right">
                {recentlyDone !== true ? <p>Steht an:</p> : <p>Geputzt am:</p>}
                <p>{date}</p>
                <p>Wer?</p>
                <div className="task--inputName">
                    <label htmlFor="responsible"></label>
                    <select name="responsible" id="responsible">
                        <option value="responsible">{responsible}</option>
                        {responsible === "Philipp" ? <option value="anita">Anita</option> : <option value="philipp">Philipp</option>}
                    </select>
                    </div>

                </article>
        </section>
    );
}

export default Task;