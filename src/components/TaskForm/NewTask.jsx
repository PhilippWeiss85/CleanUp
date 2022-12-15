import "./NewTask.css"

function CreateNewTask() {
    function submitHandler (event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data)
    }



  return (
    <section>
      <h1>Moooore cleaning!</h1>
      <form className="formcontainer" onSubmit={submitHandler}>
        <label>Task</label>
        <input type="text"></input>
        <label>Room</label>
        <select>
          <option>Living Room</option>
          <option>Kitchen</option>
          <option>Bath</option>
          <option>Bed Room</option>
        </select>
        <label>Turnus</label>
        <div>        
        <input type="number" name="number" id="number" className="turnus--number"></input>
        <input type="date" name="date" id="date"></input>
        </div>
        <button type="submit" >Go</button>
      </form>
    </section>
  );
}

export default CreateNewTask;
