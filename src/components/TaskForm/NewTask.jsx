import "./NewTask.css"

function CreateNewTask({addNewCleaningTask}) {

console.log(addNewCleaningTask)

    function submitHandler (event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data);



        addNewCleaningTask(data.task, data.room, data.turnus, data.date)
    }



  return (
    <section>
      <h1>Moooore cleaning!</h1>
      <form className="formcontainer" onSubmit={submitHandler}>
        <label>Task</label>
        <input type="text" name="task" id="task"></input>
        <label>Room</label>
        <select name="room">
          <option name="room" id="livingroom">Living Room</option>
          <option name="room" id="kitchen">Kitchen</option>
          <option name="room" id="bath">Bath</option>
          <option name="room" id="bedroom">Bed Room</option>
        </select>
        <label htmlFor="name"></label>
                    <select name="name" id="name">
                        <option value="placeholder">Select a person...</option>
                        <option value="anita">Anita</option>
                        <option value="philipp">Philipp</option>
                    </select>
        <label>Turnus </label>
        <div>        
        <input type="number" name="turnus" id="turnus" className="turnus--number"></input>
        <input type="date" name="date" id="date"></input>
        </div>
        <button type="submit">Go</button>
      </form>
    </section>
  );
}

export default CreateNewTask;
