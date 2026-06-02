function TaskStats({ tasks }) {

    const completedTasks =
        tasks.filter(task => task.completed).length;

    const pendingTasks =
        tasks.filter(task => !task.completed).length;

    return (
        <div className="stats">
            <h3>Total Tasks: {tasks.length}</h3>
            <h3>Completed Tasks: {completedTasks}</h3>
            <h3>Pending Tasks: {pendingTasks}</h3>
        </div>
    );
}

export default TaskStats;