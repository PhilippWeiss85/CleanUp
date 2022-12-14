import "./Task.css"
import TaskModal from "../Modal/TaskModal"
import { useState } from "react"


function Task ({task, responsible, date}) {
    const [activeTask, setactiveTask] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    function toggleActive () {
        setactiveTask(!activeTask)
        setModalActive(!modalActive)
      }


      function closeModal () {
        setModalActive(false)
    }

    return (
        //<section className={activeTask ? "taskcontainer--active" : "taskcontainer"}>
        
        <section className={activeTask ? "taskcontainer--active" : "taskcontainer"}>
            {modalActive && <TaskModal toggleActive={toggleActive} closeModal={closeModal} task={task} responsible={responsible} date={date}/>}
            <article className="taskcontainer-content taskcontainer-content--left">
                <div>
                <input type="checkbox" id="taskcompleted" name="taskcompleted"
                onClick={toggleActive}></input>
                </div>
                <div>
                <p className="task--headline">{task}</p>
                </div>
                </article>
                <article className="taskcontainer-content taskcontainer-content--right">
                <p>Wann?</p>
                <p>{date}</p>
                <p>Wer?</p>
                <div>
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