import "./TaskModal.css"

function TaskModal({toggleActive, closeModal, task, responsible, completeTask, id}) {


 function handleSubmit(event, id) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    const thisDate = new Date(data.date)
    

    toggleActive()
    completeTask(id, data.responsible, data.date, data.cleanTime)
 }

    return (
        <section className="taskmodaloverlay">
            <form onSubmit={() => handleSubmit(event, id)} className="taskmodal">
            <button className="taskmodal--close" onClick={closeModal}>close me</button>
            <h1>{task}</h1>
            <label htmlFor="responsible">Wer?</label>
            <article className="taskmodal--section">
            <select className="modalinput" name="responsible" id="responsible">
                <option value={responsible}>{responsible}</option>
                <option value={responsible === "Philipp" ? "Anita" : "Philipp"}>{responsible === "Philipp" ? "Anita" : "Philipp"}</option>
            </select>
            </article>
            <label htmlFor="date">Wann erledigt?</label>
            <article className="taskmodal--section">
            <input id="date" name="date" required className="modalinput" type="date"/>
            </article>
            <label htmlFor="timetoclean">Wie lange gebraucht?</label>
            <article className="taskmodal--section">
            <input name="timetoclean" id="timetoclean" required className="modalinput" type="number" step="10" min="0" max="1000"/>
            <p>Minuten</p>
            </article>
            <button className="savebutton" type="submit">save</button>
            </form>
        </section>
      );
}

export default TaskModal;