import { useReducer } from "react"
import ListForm from "../components/listForm"
import ListItem from "../components/listItem"

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return [...tasks, action.task]
    }
    case "COMPLETE_TASK": {
      const updatedTasks = tasks.map((t) => {
        const updatedTask = { ...t }
        if (t.createdAt === action.task.createdAt) {
          updatedTask.completed = !action.task.completed
        }
        return updatedTask
      })
      return updatedTasks
    }
    case "DELETE_TASK": {
      const updatedTasks = tasks.filter((t) => t.createdAt !== action.task.createdAt)
      return updatedTasks
    }
    default:
      return tasks
  }
}

function ToDoList() {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  const handleAddTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      task,
    });
  }

  const markAsCompleted = (task) => {
    dispatch({
      type: 'COMPLETE_TASK',
      task,
    });
  }

  const deleteTask = (task) => {
    dispatch({
      type: 'DELETE_TASK',
      task,
    });
  }

  return (
    <div className='p-10 w-1/2 bg-stone-800 rounded-md'>
      <h1 className='mb-5 text-emerald-500 font-bold'>To Do List</h1>
      <ListForm handleAddTask={handleAddTask} />
      <div className='mt-5'>
        {tasks.map((task) => (
          <ListItem
            key={task.createdAt}
            item={task}
            markAsCompleted={markAsCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  )
}

export default ToDoList
