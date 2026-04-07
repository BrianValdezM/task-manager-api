import { useState } from 'react';
import { createTask } from '../services/taskService';

function TaskForm({ onTaskCreated }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        priority: 'MEDIUM'
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask(form);
        setForm({ title: '', description: '', priority: 'MEDIUM' });
        onTaskCreated();
    };

    return (
        <div className="task-form">
            <h2>Nueva Tarea</h2>
            <input
                name="title"
                placeholder="Título"
                value={form.title}
                onChange={handleChange}
            />
            <input
                name="description"
                placeholder="Descripción"
                value={form.description}
                onChange={handleChange}
            />
            <select name="priority" value={form.priority} onChange={handleChange}>
                <option value="LOW">Baja</option>
                <option value="MEDIUM">Media</option>
                <option value="HIGH">Alta</option>
            </select>
            <button onClick={handleSubmit}>Agregar</button>
        </div>
    );
}

export default TaskForm;