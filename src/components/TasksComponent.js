import React, { useEffect, useState } from 'react';
import fetchByMethod from '../fecthApi';
import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem';
import './taskComponent.css';
import { setTokenInAxios } from '../localStorage';
import { filter } from '../filters';
import axios from 'axios';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { BsCalendarDateFill, BsSortNumericDown, BsSortNumericDownAlt } from 'react-icons/bs';
import FilterButton from './FilterButton';

export default function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  const [textField, setTextField] = useState({ task: '' });

  const handleClickAtoZ = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.AtoZ(tasksCopy);
    setTasks(filtered);
  };

  const handleClickZtoA = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.ZtoA(tasksCopy);
    setTasks(filtered);
  };
  
  const handleClickDateUp = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.byDateUp(tasksCopy);
    setTasks(filtered);
  };
    
  const handleClickDateDown = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.byDateDown(tasksCopy);
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
        <h3>
          Filtros
        </h3>
      </div>
      <div>
        <FilterButton
          text={ <FaSortAlphaDown /> }
          handleClick={ handleClickAtoZ }
        />
        <FilterButton
          text={ <FaSortAlphaDownAlt /> }
          handleClick={ handleClickZtoA }
        />
        <FilterButton
          text={ <><BsSortNumericDown /> <BsCalendarDateFill /></> }
          handleClick={ handleClickDateUp }
        />
        <FilterButton
          text={ <><BsSortNumericDownAlt /> <BsCalendarDateFill /></> }
          handleClick={ handleClickDateDown }
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
