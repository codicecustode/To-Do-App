import { useState, useEffect } from 'react';
import { Input } from './components/Input';
import { TaskViewer } from './components/TaskViewer';
import { TodoDate } from './components/TodoDate';
export const Todo = () => {
  const buttonStyle = {
    borderRadius: '999px',
    height: '2rem',
    width: '6rem',
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
  };
  const [inputValue, setInputValue] = useState({ id: '', content: '', checked: false });
 
  const [task, setTask] = useState([]);
  const handleDelete = (index) => {
    setTask((prevTask) => {
      return prevTask.filter((_, i) => i !== index);
    });
  };
  const handleClearAll = () => {
    setTask([]);
  };


  return (
    <>
      <div>
        <h1>Todo</h1>
        <TodoDate />
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          task={task}
          setTask={setTask}
        />
      </div>
      <div>
        <TaskViewer 
          task={task}
          setTask={setTask}
          deleteTask={(index) => handleDelete(index)}
        />
      </div>
      <div>
        <button style={ buttonStyle } onClick={() => handleClearAll()}>Clear All</button>
      </div>
    </>


  )
}