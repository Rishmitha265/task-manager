function TaskItem({ task, tasks, setTasks }) {

    const completeTask = () => {

        const updatedTasks = tasks.map((t) =>
            t.id === task.id
                ? { ...t, completed: true }
                : t
        );

        setTasks(updatedTasks);
    };

    const deleteTask = () => {

        const updatedTasks = tasks.filter(
            (t) => t.id !== task.id
        );

        setTasks(updatedTasks);
    };

    return (
        <div className="task-item">
            <span>
                {task.text}
            </span>

            <button 
            className="complete-btn"
            onClick={completeTask}>
                Complete
            </button>

            <button 
            className="delete-btn"
            onClick={deleteTask}>
                Delete
            </button>
        </div>
    );
}

export default TaskItem;