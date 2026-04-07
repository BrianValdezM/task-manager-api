import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [refresh, setRefresh] = useState(0);

    const handleTaskCreated = () => {
        setRefresh(prev => prev + 1);
    };

    return (
        <div className="app">
            <h1>📋 Task Manager</h1>
            <TaskForm onTaskCreated={handleTaskCreated} />
            <TaskList refresh={refresh} />
        </div>
    );
}

export default App;