import { useState } from 'react';
import Button from './Components/forms/button';
import addImage from './assets/add-folder-svgrepo-com.svg'
import deleteImage from './assets/delete-1487-svgrepo-com.svg'

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
      <Button  handler={addTask} addSrc={addImage}/>
     {/* <img src={demoImage} width={'20px'} /> */}
      <ul>
        {list.map((task, index) => (
          <li key={index}>
            {task}
            <Button handler={() => deleteTask(index)} deleteSrc={deleteImage} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;