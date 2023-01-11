import "./TaskModal.css"

function TaskModal({toggleActive, closeModal, task, responsible}) {
 

    return (
        <section className="taskmodaloverlay">
            <div className="taskmodal">
            <button className="taskmodal--close" onClick={closeModal}>close me</button>
            <h1>{task}</h1>
            <label htmlFor="responsible">Wer?</label>
            <article className="taskmodal--section">
            <select className="modalinput" name="responsible" id="responsible">
                <option value={responsible}>{responsible}</option>
                <option value={responsible === "Philipp" ? "Anita" : "Philipp"}>{responsible === "Philipp" ? "Anita" : "Philipp"}</option>
            </select>
            </article>
            <label>Wann erledigt?</label>
            <article className="taskmodal--section">
            <input className="modalinput" type="date"/>
            <p>icon</p>
            </article>
            <label>Wie lange gebraucht?</label>
            <article className="taskmodal--section">
            <input className="modalinput" type="number" step="10" min="0" max="1000"/>
            <p>Minuten</p>
            </article>
            <button onClick={toggleActive} className="savebutton">save</button>
            </div>
        </section>
      );
}

export default TaskModal;