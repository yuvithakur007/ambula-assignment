import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const ToDoListPage = () => {
  const { addTask, newTask, tasks, setNewTask, markTaskCompleted, removeTask } =
    useStateContext();

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">ToDo List</h2>
      </div>
      <div className="mt-4 flex ">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="mr-2 p-2 rounded-md border border-black"/>
        <button
          onClick={addTask}
          className="bg-green-500 px-3 py-2 text-white font-semibold rounded-md">
          Add Task
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <p className="font-medium ">
          Total tasks: {tasks.length}
        </p>
        <p className="font-medium  ml-4">
          Completed tasks: {tasks.filter((task) => task.completed).length}
        </p>
      </div>
      <ul className="mt-4 w-1/2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 rounded-md mb-2 flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => markTaskCompleted(task.id)}
              className="mr-2"
            />
            <span className={`text-lg font-medium ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </span>
            <button
              onClick={() => removeTask(task.id)}
              className="ml-auto bg-red-500 px-2 py-1 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListPage;
