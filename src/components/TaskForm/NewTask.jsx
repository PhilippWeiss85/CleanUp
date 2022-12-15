import "./NewTask.css"

function CreateNewTask() {
  return (
    <>
      <h1>Moooore cleaning!</h1>
      <form className="formcontainer">
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
        <input type="number"></input>
        <input type="date"></input>
        <button type="submit">Go</button>
      </form>
    </>
  );
}

export default CreateNewTask;
