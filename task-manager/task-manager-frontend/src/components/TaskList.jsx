import { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';
import TaskItem from './TaskItem';

function TaskList({ refresh }) {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await getTasks();
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, [refresh]);

    return (
        <div className="task-list">
            <h2>Mis Tareas ({tasks.length})</h2>
            {tasks.length === 0 && <p>No hay tareas aún.</p>}
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onUpdate={fetchTasks} />
            ))}
        </div>
    );
}

export default TaskList;