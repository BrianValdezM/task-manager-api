import { deleteTask, updateTask } from '../services/taskService';

function TaskItem({ task, onUpdate }) {

    const handleDelete = async () => {
        await deleteTask(task.id);
        onUpdate();
    };

    const handleStatusChange = async (e) => {
        await updateTask(task.id, { ...task, status: e.target.value });
        onUpdate();
    };

    const priorityColor = {
        HIGH: '#e74c3c',
        MEDIUM: '#f39c12',
        LOW: '#2ecc71'
    };

    return (
        <div className="task-item" style={{ borderLeft: `4px solid ${priorityColor[task.priority]}` }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <select value={task.status} onChange={handleStatusChange}>
                <option value="PENDING">Pendiente</option>
                <option value="IN_PROGRESS">En progreso</option>
                <option value="DONE">Hecho</option>
            </select>
            <span className="priority-badge">{task.priority}</span>
            <button className="delete-btn" onClick={handleDelete}>Eliminar</button>
        </div>
    );
}

export default TaskItem;