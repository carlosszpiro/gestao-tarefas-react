import { ChevronRightIcon, Check, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TaskButton from "./TaskButton";


function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  const onSeeDescriptionClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full flex gap-1 ${
              task.isCompleted && "line-through"
            }`}
          >
            <Check className={`${!task.isCompleted && "hidden"}`} />
            {task.title}
          </button>
          
          <TaskButton onClick={() => onSeeDescriptionClick(task)}>
            <ChevronRightIcon />
          </TaskButton>
          
          <TaskButton onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2 />
          </TaskButton>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
