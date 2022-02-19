import React, { useState } from 'react';
import TasksComponent from '../components/TasksComponent';
import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import './taskPage.css';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTasks({
      ...tasks,
      [name]: value,
    });
  };

  const handleAdd = async(event) => {
    event.preventDefault();
    setTasks({ ...tasks, task: '' });
  };

  return (
    <div>
      <h2>Bem vindo, {axios.defaults.headers['userName'].split(' ')[0]}!</h2>
      <div className="textfield-addbutton">
        <TextField
          sx={{ width: '100%' }}
          className="content-field"
          required
          id="outlined-text-input"
          type="text"
          name="input"
          value=""
          onChange={ (e) => handleChange(e.currentTarget.value) }
          />
        <IconButton onClick={ handleAdd }>
          <AddIcon />
        </IconButton>
      </div>
      <TasksComponent />
    </div>
  );
}
