import { FaCircleCheck } from "react-icons/fa6";
export const TodoList = (props) => {
  const liContainer = {
    maxWidth: '300px',
    width: '100%',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid grey',
    borderRadius: '999px',
    margin: '1rem 0',
  };
  const liStyle = {
    padding: '0',
    margin: '0',
    listStyle: 'none',
    fontSize: '1.25rem',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    width: '100%',
    textDecoration: props.task.checked ? "line-through" : "none",
  }
  const deleteButton = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  }
  const FaCircleCheckStyle = {
    color: 'green',
    fontSize: '1.5rem',
    cursor: 'pointer',
    border: '999px'
  }
 

  const { task, deleteTask, index, setTask} = props;
  const handleDelete = (index) => {
    deleteTask(index);
  }
  const handleChecked = (currValue) => {
    setTask((prevTask) => {
      return prevTask.map((task) => {
        if (task.content === currValue) {
          return { ...task, checked: !task.checked };
        }
        return task;
      });
    });
  }
  console.log('tasks', task)
  return (
    <li key={index} style={liContainer}>
      <p style={liStyle}>{task.content}</p>
      <button onClick={() => handleChecked(task.content)}>
        <FaCircleCheck style={FaCircleCheckStyle} />
      </button>
      <button style={deleteButton}
        onClick={() => handleDelete(index)}
      >Delete</button>
    </li>
  )
}