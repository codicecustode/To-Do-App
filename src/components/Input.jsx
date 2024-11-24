import { useState } from 'react';
export const Input = (props) => {
  const inputStyle = {
    width: '100%',
    height: '2rem',
    fontSize: '1rem',
    padding: '1rem ',
    margin: '1rem 0',
    borderTop: '3px solid red',
    borderBottom: '3px solid blue',
    borderLeft: '3px solid yellow',
    borderRight: '3px solid green',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
    
  }

  const inputFocusStyle = {
    boxShadow: '0 0 10px 5px rgba(255, 0, 0, 0.5)', // Circular glow
    borderColor: 'red', // Optional: change border color
  };

  const buttonContainer = {
    marginLeft: '1rem',
  }

  const inputButtonContainer = {
    maxWidth: '300px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const buttonStyle = {
    borderRadius: '999px',
    height: '2rem',
    width: '6rem',
    border: 'none',
    backgroundColor: 'green',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const { inputValue, setInputValue, task, setTask } = props;
  const [focused, setFocused] = useState(false);

  const handleInputChange = (value) => {
    setInputValue({ id:value, content:value, checked:false });
  }

  const handdleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.content == '') return;
    console.log('21');
    if(task.find((currValue) => currValue.content === inputValue.content)){
      setInputValue({ id:'', content:'', checked:false });
      return;
    }

    setTask((prevTask) => {
      return [...prevTask, { id: inputValue.id, content: inputValue.content, checked: inputValue.checked }];
    })
  
    setInputValue({ id:'', content:'', checked:false });

  }



  return (
    <form onSubmit={handdleFormSubmit}>
      <div style={ inputButtonContainer }>
        <div>
          <input
            type="text"
            placeholder="Add a todo task"
            value={inputValue.content}
            style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div style={buttonContainer}>
          <button style={buttonStyle} type="submit">Add Task</button>
        </div>
      </div>

    </form>

  )
}