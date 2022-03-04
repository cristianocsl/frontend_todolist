import React, { useEffect, useState } from 'react';
import fetchByMethod from '../fecthApi';
import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem';
import './taskComponent.css';
import { setTokenInAxios } from '../localStorage';
import { filter } from '../filters';
import axios from 'axios';
import FilterButton from './FilterButton';

export default function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  const [textField, setTextField] = useState({ task: '' });

  const handleClickAlpha = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.alphabetically(tasksCopy);
    setTasks(filtered);
  };

  
  const handleClickDate = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.byDate(tasksCopy);
    setTasks(filtered);
  };

  const handleAddTask =  async (event) => {
    event.preventDefault();

    const data = await fetchByMethod.fetchCreateTask(textField);

    setTasks([...tasks, data]);
    setTextField({...textField, task: ''});
  };
  
  useEffect(async () => {
    await setTokenInAxios(axios);
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

  const handleDeleteOnFather = (taskId) => {
    const notDeleted = tasks.filter(({ _id }) => _id !== taskId._id);
    setTasks(notDeleted);
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
      <div>
        Filtros
        <FilterButton
          text="Alfabética"
          handleClick={ handleClickAlpha }
        />
        <FilterButton
          text="Data"
          handleClick={ handleClickDate }
        />
      </div>
      {
        tasks.map((item) => (
          <TaskItem
            item={item}
            key={item._id}
            sendChangesToFather={ handleChange }
            handleDeleteOnFather={ handleDeleteOnFather }
          />
        ))
      }
    </div>
  );
}
