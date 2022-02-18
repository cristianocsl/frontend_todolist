import React, { useEffect, useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import fetchByMethod from '../fecthApi';
import './taskComponent.css';

export default function TasksComponent() {
  const [tasks, setTasks] = useState([{ id: 0, task: '' }]);

  
  console.log('tasks ', tasks);
  useEffect(async () => {
    const data = await fetchByMethod.fetchAllTasks();
    setTasks(data);
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTasks({
      ...tasks,
      [name]: value,
    });
  };

  const handleDelete = () => {};

  const handleEdit = () => {};

  // const handleAdd = async(event) => {
  //   event.preventDefault();
  //   setTasks({ ...tasks, task: '' });
  // };

  return (
    <div className="container">
      {
        tasks.map((item) => (
          <div
            key={item._id + 1}
            className="container-task"
          >
            <TextField
              key={item._id}
              sx={{ width: '100%' }}
              className="content-field"
              required
              id="outlined-text-input"
              type="text"
              name="text"
              value={item.task}
              onChange={ (e) => handleChange(e.currentTarget.value, item._id) }
            />
            <IconButton onClick={ handleDelete }>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={ handleEdit }>
              <EditIcon />
            </IconButton>
          </div>
        ))
      }
    </div>
  );
}
