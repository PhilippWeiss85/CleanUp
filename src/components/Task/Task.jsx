import "./Task.css"
import TaskModal from "../Modal/TaskModal"
import DeleteButton from "../Button/DeleteButton"
import { useState } from "react"
import { IconContext } from "react-icons";
import { TiDeleteOutline, TiTickOutline,TiStopwatch } from 'react-icons/ti';



function Task ({task, responsible, date, recentlyDone, completeTask, id, cleanTime, deleteTask, room}) {
    const [modalActive, setModalActive] = useState(false)

    function toggleActive () {

        setModalActive(true)
    } 

      function closeModal () {
        setModalActive(!modalActive)
    }


    return (
        <section className="taskcontainer">
            {modalActive && <TaskModal toggleActive={toggleActive} id={id} completeTask={completeTask} closeModal={closeModal} task={task} recentlyDone={recentlyDone} responsible={responsible} cleanTime={cleanTime} date={date} room={room}/>}
            <article className="taskcontainer-content taskcontainer-content--left">
            <IconContext.Provider value={{ className: 'react-icons' }}><div className="taskcontainer--delete"><DeleteButton deletetask={deleteTask} id={id}><TiDeleteOutline/></DeleteButton></div></IconContext.Provider>
                <div className="taskcontainer-content--header">
                {recentlyDone === true ?
                <IconContext.Provider value={{ className: 'react-icons' }}><TiTickOutline/></IconContext.Provider> 
                :
                <IconContext.Provider value={{ className: 'react-icons' }}><TiStopwatch/></IconContext.Provider> 
                }
                <p className="task--headline">{room}<br></br>{task}</p>
                </div>
                </article>
                <article className="taskcontainer-content taskcontainer-content--right">
                {recentlyDone !== true ? <p>Steht an:</p> : <p>Geputzt am:</p>}
                <p>{date}</p>
                {recentlyDone !== true ? <p>Wer?</p> : <p>Geputzt von:</p>}
                {recentlyDone !== true ? <div className="task--inputName">
                    <label htmlFor="responsible"/>
                    <select name="responsible" id="responsible">
                        <option value="responsible">{responsible}</option>
                        {responsible === "Philipp" ? <option value="anita">Anita</option> : <option value="philipp">Philipp</option>}
                    </select>
                    </div> :
                    <div><p>{responsible}</p></div>}
                    {recentlyDone === false ? <input type="checkbox" name="checkbox" id="checkbox" className="taskcontainer--done"  onClick={toggleActive}></input>  : <></>}
                </article>
        </section>
    );
}

export default Task;