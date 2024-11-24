import { useState } from 'react';
import { Input } from './components/Input';
import { TaskViewer } from './components/TaskViewer';
export const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);
  const handleDelete = (index) => {
    setTask((prevTask) => {
      return prevTask.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      <div>
        <h1>Todo</h1>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          task={task}
          setTask={setTask}
        />
      </div>
      <div>
        <TaskViewer 
          tasks={task}
          deleteTask={(index) => handleDelete(index)}
        />
      </div>
    </>


  )
}