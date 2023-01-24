import "./Button.css"

function DeleteButton ({children, deletetask, id}) {
    return ( 
        <button className="delete-button" onClick={() => deletetask(id)}>{children}</button>
     );
}

export default DeleteButton