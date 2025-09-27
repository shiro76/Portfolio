import React, { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <section id="todo" className="py-20 bg-gray-50">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Application Todo</h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ajouter une tâche..."
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-500 transition"
          >
            Ajouter
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 mb-2 border rounded hover:bg-gray-100 transition"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`flex-1 cursor-pointer ${
                  task.done ? "line-through text-gray-400" : ""
                }`}>
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 font-bold">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
