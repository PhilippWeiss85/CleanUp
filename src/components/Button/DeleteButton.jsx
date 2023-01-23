import "./Button.css"

function DeleteButton ({children, deleteTask, id}) {
    return ( 
        <button className="delete-button" onClick={() => deleteTask(id)}>{children}</button>
     );
}

export default DeleteButton