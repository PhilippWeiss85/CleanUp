import CreateNewTask from "../components/TaskForm/NewTask";

function CreateTaskPage({addNewCleaningTask}) {
    return (
        <CreateNewTask addNewCleaningTask={addNewCleaningTask}/> 
     );
}

export default CreateTaskPage;