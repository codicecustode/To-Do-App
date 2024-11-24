
import { TodoList } from "./TodoList";
export const TaskViewer = ({task, deleteTask, setTask}) => {
 
  
  
  return (
    <div>
      <ul>
        {task.map((task, index) => {
          return (
            <TodoList
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              setTask={setTask}
            />
          );
        })}
      </ul>
    </div>
  )
}
