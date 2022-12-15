import "./Task.css"
import {useState} from "react"

function Task ({active, task, cleanedLast, cleanedStatus, responsible}) {
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
                <aside>
                <p>{task}</p>
                </aside>
                </article>
                <article className="taskcontainer-content taskcontainer-content--right">
                <p>Wann?</p>
                <p>Wer?</p>
                <p>{cleanedLast}</p>
                <form>
                    <label htmlFor="name"></label>
                    <select name="name" id="name">
                        <option value="Anita">Anita</option>
                        <option value="Philipp">Philipp</option>
                    </select>

                </form>
                </article>
        </section>
    );
}

export default Task;