import {useState} from 'react';
function TaskForm({tasks,setTasks}) {
    const[task,setTask]=useState("");

    const addTask=()=>{
        if(task.trim()===""){
            return;
        }

        setTasks([...tasks,
            {
                id:Date.now(),
                text:task,
                completed:false
            }]);

            setTask("");
    };
    return(
        <div>
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            />

            <button 
            className="add-btn"
            onClick={addTask}>
                Add Task
            </button>

            
        </div>
    );
}

export default TaskForm;