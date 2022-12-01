import "./Task.css"

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
            <button>activate</button>
            </div>
        </section>
    );
}

export default Task;