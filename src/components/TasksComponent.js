import React, { useEffect, useState } from 'react';
import fetchByMethod from '../fecthApi';
import { TextField, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem';
import './taskComponent.css';
import { setTokenInAxios } from '../localStorage';
import { filter, showOnly } from '../filters';
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
  const [pending, setPending] = useState([]);
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [renderPending, setRenderPending] = useState(false);
  const [renderTodo, setRenderTodo] = useState(false);
  const [renderDone, setRenderDone] = useState(false);
  const [hideFilters, setShowFilters] = useState(true);
  const [textField, setTextField] = useState({ task: '' });

  const handleClickAtoZ = () => {
    const filtered = filter.AtoZ([...tasks]);
    setTasks(filtered);
  };

  const handleClickZtoA = () => {
    const filtered = filter.ZtoA([...tasks]);
    setTasks(filtered);
  };
  
  const handleClickNewDate = () => {
    const filtered = filter.byNewDate([...tasks]);
    setTasks(filtered);
  };
  
  const handleClickOldDate = () => {
    const filtered = filter.byOldDate([...tasks]);
    setTasks(filtered);
  };

  const separateStatus = () => {
    setPending(filter.byStatus(tasks, PENDING));
    setDone(filter.byStatus(tasks, DONE));
    setTodo(filter.byStatus(tasks, TODO));
  };

  const setAllFalse = () => {
    setRenderPending(false);
    setRenderTodo(false);
    setRenderDone(false);
  };

  const functions = { setRenderPending, setRenderTodo, setRenderDone };

  const contentFilterButtons = [
    { text: <FaSortAlphaUp />, handleClick: handleClickAtoZ },
    { text: <FaSortAlphaUpAlt />, handleClick: handleClickZtoA },
    { text: <><FaSortNumericUp /> <BsCalendarDateFill /></>, handleClick: handleClickOldDate },
    { text: <><FaSortNumericUpAlt /> <BsCalendarDateFill /></>, handleClick: handleClickNewDate },
    { text: PENDING, handleClick: () => showOnly.pendingTrue(functions), heightValue: '31px' },
    { text: TODO, handleClick: () => showOnly.todoTrue(functions), heightValue: '31px' },
    { text: DONE, handleClick: () => showOnly.doneTrue(functions), heightValue: '31px' },
    { text: ORIGINAL, handleClick: async () => { fetchOriginalData(); setAllFalse(); }, heightValue: '31px' },
  ];

  const handleAddTask =  async (event) => {
    event.preventDefault();
    const data = await fetchByMethod.fetchCreateTask(textField);
    setTasks([...tasks, data]);
    setTextField({...textField, task: ''});
  };
  
  const fetchOriginalData = async () => {
    await setTokenInAxios(axios);
    const data = await fetchByMethod.fetchAllTasks();
    setTasks(data);
  };
  
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
  
  const mapTasks = (tasks) => tasks.map((item) => (
    <TaskItem
    item={item}
    key={item._id}
    sendChangesToFather={ handleChange }
    handleDeleteOnFather={ handleDeleteOnFather }
    />
  ));
    
  const renderTasks = () => {
    if (tasks && !renderPending && !renderTodo && !renderDone) return mapTasks(tasks);
    if (renderPending) return mapTasks(pending);
    if (renderTodo) return mapTasks(todo);
    if (renderDone) return mapTasks(done);
  };

  useEffect(async () => {
    separateStatus();
    return () => separateStatus();
  }, [tasks]);
    
  useEffect(async () => {
    await fetchOriginalData();
  }, []);

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
          <AddIcon sx={{ color: '#0d47a1' }} />
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
          Filters
        </Button>
      </div>
      <div hidden={hideFilters}>
        <div
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
      </div>
      {
        renderTasks()
      }
    </div>
  );
}
