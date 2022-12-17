import "./Task.css"
import { useState } from "react"


function Task ({toggleActive, task, room, cleanedStatus, responsible, date}) {
    const [activeTask, setactiveTask] = useState(false)
    function toggleActive () {
        setactiveTask(!activeTask)
      }
      

    return (
        <section className={activeTask ? "taskcontainer--active" : "taskcontainer"}>
            <article className="taskcontainer-content taskcontainer-content--left">
                <div>
                <input type="checkbox" id="taskcompleted" name="taskcompleted"
                onClick={toggleActive}></input>
                </div>
                <div>
                <p>{task}</p>
                <p>{room}</p>
                <p>{cleanedStatus}</p>
                </div>
                </article>
                <article className="taskcontainer-content taskcontainer-content--right">
                <p>Wann?</p>
                <p>{date}</p>
                <p>Wer?</p>
                <p>{responsible}</p>
                    <label htmlFor="responsible"></label>
                    <select name="responsible" id="responsible">
                        <option value="placeholder">Select a person...</option>
                        <option value="anita">Anita</option>
                        <option value="philipp">Philipp</option>
                    </select>

                </article>
        </section>
    );
}

export default Task;