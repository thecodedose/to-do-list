import { useState } from 'react';

function ListForm({ handleAddTask }) {
  const [task, setTask] = useState({ title: '', completed: false });

  // Handle input text
  const handleTaskChange = (event) => {
    setTask({ ...task, title: event.target.value });
  }

  // Add the task to array
  const handleAdd = () => {
    handleAddTask({ ...task, createdAt: Date.now() });
    setTask({ title: '', completed: false });
  }

  return (
    <div className="flex items-center">
      <input type="text" value={task.title} onChange={handleTaskChange} className="border rounded-md bg-stone-300 text-stone-800 p-2 flex-grow" />
      <button onClick={handleAdd} className="px-5 py-2 ml-2 text-stone-800 font-bold bg-emerald-500 hover:bg-emerald-600 transition-all rounded-md">Add</button>
    </div>
  );
};

export default ListForm;
