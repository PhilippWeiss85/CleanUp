import "./TaskModal.css"
import { IconContext } from "react-icons";
import { TiDeleteOutline } from 'react-icons/ti';

function TaskModal({toggleActive, closeModal, task, responsible, completeTask, id, room}) {


 function handleSubmit(event, id) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    toggleActive()
    completeTask(id, data.responsible, data.date, data.cleanTime)
 }

    return (
        <section className="taskmodaloverlay">
            <form onSubmit={() => handleSubmit(event, id)} className="taskmodal">
            <IconContext.Provider value={{ className: "react-icons taskmodal--close"  }}><TiDeleteOutline onClick={closeModal}/></IconContext.Provider> 
            <h1 className="taskmodal--headline">Did you finish {task} {room}?</h1>
            <label htmlFor="responsible" className="taskmodal--label">Wer?</label>
            <article className="taskmodal--section">
            <select className="modalinput" name="responsible" id="responsible">
                <option value={responsible}>{responsible}</option>
                <option value={responsible === "Philipp" ? "Anita" : "Philipp"}>{responsible === "Philipp" ? "Anita" : "Philipp"}</option>
            </select>
            </article>
            <label htmlFor="date"className="taskmodal--label">Wann erledigt?</label>
            <article className="taskmodal--section">
            <input id="date" name="date" required className="modalinput" type="date"/>
            </article>
            <label htmlFor="timetoclean"className="taskmodal--label">Wie lange gebraucht (in Min)?</label>
            <article className="taskmodal--section">
            <input name="timetoclean" id="timetoclean" required className="modalinput" type="number" step="10" min="0" max="1000"/>
            </article>
            
            <button className="savebutton" type="submit">save</button>
            </form>
        </section>
      );
}

export default TaskModal;