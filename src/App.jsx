import { useState } from 'react';
import Button from './Components/forms/button';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask() {
    let newList = [...list];
    newList.push(task);
    setList(newList);
    setTask(''); 
  }

  function deleteTask(index) {
    let newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }

  return (
    <>
      <h1>Todo App</h1>

      <input
        placeholder="Enter task"
        value={task}
        onChange={handleChange}
      />
      <Button title="ADD" handler={addTask} />

      <ul>
        {list.map((task, index) => (
          <li key={index}>
            {task}
            <Button title="delete" handler={() => deleteTask(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;