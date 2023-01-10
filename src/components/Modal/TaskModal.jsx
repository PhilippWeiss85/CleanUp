import "./TaskModal.css"

function TaskModal({toggleActive}) {
    return (
        <section className="taskmodaloverlay">
            <div className="taskmodal">
            <h1>Task</h1>
            <label htmlFor="responsible">Wer?</label>
            <article className="taskmodal--section">
            <select className="modalinput" name="responsible" id="responsible">
                <option value="anita">Anita</option>
                <option value="philipp">Philipp</option>
            </select>
            </article>
            <label>Wann erledigt?</label>
            <article className="taskmodal--section">
            <input className="modalinput" type="date"/>
            <p>icon</p>
            </article>
            <label>Wie lange gebraucht?</label>
            <article className="taskmodal--section">
            <input className="modalinput" type="number"/>
            <p>Minuten</p>
            </article>
            <button onClick={toggleActive} className="savebutton">save</button>
            </div>
        </section>
      );
}

export default TaskModal;