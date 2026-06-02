import TaskItem from './TaskItem';

function TaskList({tasks,setTasks}){
    return(

        <div>
            <h2>Tasks:</h2>
            {tasks.map((task) => (
                <TaskItem 
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                />
            ))}
        </div>
    );
}

export default TaskList;