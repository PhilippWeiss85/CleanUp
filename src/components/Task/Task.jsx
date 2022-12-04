import "./Task.css"
import Button from "../Button/Button";

function Task ({active, icon, task, cleanedLast, cleanedStatus, responsible}) {
    return (
        <section className="taskcontainer">
            <article className="taskcontainer-content ">
                <p >{active === true ? "active" : "inactive"}</p>
                <p>{task}</p>
                <p>{cleanedLast}</p>
                </article>
                <article className="taskcontainer-content ">
                <p>{responsible}</p>
                <p>{cleanedStatus}</p>
                <p>{icon}</p>
            </article>
            <div className="buttoncontainer">
            <Button/>
            </div>
        </section>
    );
}

export default Task;