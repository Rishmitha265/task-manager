import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {

    const [tasks, setTasks] = useState([]);

    
    useEffect(() => {

        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }

    }, []);

    
    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    return (
        <div className="container">
            <h1>Task Manager</h1>

            <TaskStats tasks={tasks} />

            <TaskForm
                tasks={tasks}
                setTasks={setTasks}
            />

            <TaskList
                tasks={tasks}
                setTasks={setTasks}
            />
        </div>
    );
}

export default App;