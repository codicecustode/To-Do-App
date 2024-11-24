import { useState } from 'react';
import { Input } from './components/Input';
export const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);
  

  return (
    <div>
      <h1>Todo</h1>
      <Input 
        inputValue={ inputValue }
        setInputValue={ setInputValue }
        task={ task }
        setTask={ setTask }
      />

    </div>
  )
}