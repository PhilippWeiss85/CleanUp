import "./Task.css"
import Button from "../Button/Button";

function Task ({active, icon, task, cleanedLast, cleanedStatus, responsible}) {
    return (
        <section className="taskcontainer">
            <article className="taskcontainer-content taskcontainer-content--left">
                <div>
                <input type="checkbox" id="taskcompleted" name="taskcompleted"></input>
                </div>
                <aside>
                <p>{task} {active === true ? "active" : "inactive"}</p>
                </aside>
                </article>
                <article className="taskcontainer-content taskcontainer-content--right">
                <p>{cleanedLast}</p>
                <p>{responsible}</p>
                <p>{cleanedStatus}</p>
                <p>{icon}</p>
                </article>
        </section>
    );
}

export default Task;