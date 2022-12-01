import "./Task.css"

function Task ({active, icon, name, cleanedLast, cleanedStatus, responsible}) {
    return ( 
        <section className="taskcontainer">
            <article className="taskcontainer-content ">
                <button>activate</button>
                <p>{active}</p>
                <p>{icon}</p>
                <p>{name}</p>
                <p>{cleanedLast}</p>
                <p>{cleanedStatus}</p>
                <p>{responsible}</p>
            </article>
        </section>
    );
}

export default Task;