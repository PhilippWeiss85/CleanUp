import "./Task.css"
import Button from "../Button/Button";

function Task ({active, task, cleanedLast, cleanedStatus, responsible}) {
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