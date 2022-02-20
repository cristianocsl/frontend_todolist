import React, { useEffect, useState } from 'react';
import fetchByMethod from '../fecthApi';
import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import fetchCreateTask from '../fecthApi/fetchCreateTask';
import TaskItem from './TaskItem';

import './taskComponent.css';

export default function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  const [textField, setTextField] = useState({ task: '' });
  
  const handleAddTask =  async (event) => {
    event.preventDefault();

    const data = await fetchByMethod.fetchCreateTask(textField);

    setTasks([...tasks, data]);
    setTextField({...textField, task: ''});
  };
  
  useEffect(async () => {
    const data = await fetchByMethod.fetchAllTasks();
    setTasks(data);
  }, []);

  const handleChange = (taskObj) => {
    const found = tasks.map((item) => {
      if (item._id === taskObj._id) return {
        ...item, ...taskObj
      };
      return item;
    });
    setTasks(found);
  };

  return (
    <div className="container">
      <form
        className="textfield-addbutton"
        onSubmit={ handleAddTask }
      >
        <TextField
          sx={{ width: '100%' }}
          className="content-field"
          required
          id="outlined-text-input"
          type="text"
          name="input"
          value={textField.task}
          onChange={ (e) => setTextField({...textField, task: e.target.value}) }
          />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
      {
        tasks.map((item, index) => (
          <TaskItem item={item} key={index} sendChangesToFather={handleChange} />
        ))
      }
    </div>
  );
}
