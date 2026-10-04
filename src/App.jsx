import { useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask() {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>Todo List</h1>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Введите задачу"
            />

            <button onClick={addTask}>
                Добавить
            </button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}

                        <button onClick={() => deleteTask(index)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;