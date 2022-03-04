import React, { useEffect, useState } from 'react';
import fetchByMethod from '../fecthApi';
import { TextField, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem';
import './taskComponent.css';
import { setTokenInAxios } from '../localStorage';
import { filter } from '../filters';
import axios from 'axios';
import { FaSortAlphaUp, FaSortAlphaUpAlt, FaSortNumericUp, FaSortNumericUpAlt } from 'react-icons/fa';
import { BsCalendarDateFill  } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import FilterButton from './FilterButton';

const PENDING = 'Pending';
const TODO = 'To do';
const DONE = 'Done';
const ORIGINAL = 'Original';

export default function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  const [copyTasks, setCopyTasks] = useState([]);
  const [hideFilters, setShowFilters] = useState(true);
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
  
  const handleClickNewDate = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.byNewDate(tasksCopy);
    setTasks(filtered);
  };
  
  const handleClickOldDate = () => {
    const tasksCopy = [...tasks];
    const filtered = filter.byOldDate(tasksCopy);
    setTasks(filtered);
  };

  const handleClickStatus = (statusRef) => {
    const tasksCopy = [...copyTasks];
    const filtered = tasksCopy.filter(({ status }) => status === statusRef);
    setTasks(filtered);
  };

  const contentFilterButtons = [
    { text: <FaSortAlphaUp />, handleClick: handleClickAtoZ },
    { text: <FaSortAlphaUpAlt />, handleClick: handleClickZtoA },
    { text: <><FaSortNumericUp /> <BsCalendarDateFill /></>, handleClick: handleClickOldDate },
    { text: <><FaSortNumericUpAlt /> <BsCalendarDateFill /></>, handleClick: handleClickNewDate },
    { text: PENDING, handleClick: () => handleClickStatus(PENDING), heightValue: '31px' },
    { text: TODO, handleClick: () => handleClickStatus(TODO), heightValue: '31px' },
    { text: DONE, handleClick: () => handleClickStatus(DONE), heightValue: '31px' },
    { text: ORIGINAL, handleClick: () => setTasks(copyTasks), heightValue: '31px' },
  ];

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
    setCopyTasks(data);
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
        <Button
          className="content-field"
          variant="outlined"
          size="large"
          type="button"
          sx={{ height: '31px' }}
          onClick={ () => setShowFilters((prevState) => !prevState) }
        >
          Filtros
        </Button>
      </div>
      <div
        hidden={hideFilters}
        className="filter-buttons"
      >
        {
          contentFilterButtons.map(({ text, handleClick, heightValue}) => <FilterButton
            key={ uuidv4() }
            text={ text }
            handleClick={ handleClick }
            heightValue={ heightValue }
          />)
        }
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
