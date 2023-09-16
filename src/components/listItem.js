function ListItem({ item, markAsCompleted, deleteTask }) {
  const { title, completed } = item;

  return (
    <div className="flex gap-5 items-center justify-between bg-stone-700 hover:bg-stone-600 cursor-pointer my-2 px-2 rounded-md">
      <div  className="flex gap-5 items-center">
        <input value={completed} type='checkbox' onChange={() => markAsCompleted(item)} />
        <h5 className={completed ? 'line-through text-stone-400' : ''}>{title}</h5>
      </div>
      <button
        className="text-white rounded px-3 py-2 my-2 text-xs text-stone-300 font-bold hover:text-red-400"
        onClick={() => deleteTask(item)}
      >Delete</button>
    </div>
  );
};

export default ListItem;
