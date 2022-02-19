import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputLabel, FormControl, Select, TextField, IconButton, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { shape, string } from 'prop-types';

export default function TaskItem({ item }) {
  const [taskObj, setTaskObj] = useState({status: item.status});


  const handleChangeSelect = (event) => {
    setTaskObj({...taskObj, status: event.target.value});
  };

  const handleChangeTextField = ({ target }) => {
    const { name, value } = target;
    setTaskObj({
      ...taskObj,
      [name]: value,
    });
  };
  
  const handleDelete = () => {};

  const handleEdit = () => {};

  const options = ['To do', 'Pending', 'Done' ];
  return (
    <div
    key={item._id + 1}
    className="container-task"
  >
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={taskObj.status}
          defaultValue={item.status}
          name="select"
          onChange={handleChangeSelect}
        >
          {
            options.map((option) => {
              return <MenuItem value={option} key={option}>{option}</MenuItem>;
            })
          }
        </Select>
      </FormControl>
    </Box>
    <TextField
      key={item._id}
      sx={{ width: '100%' }}
      className="content-field"
      required
      id="outlined-text-input"
      type="text"
      name="text"
      value={item.task}
      onChange={ (e) => handleChangeTextField(e.currentTarget.value, item._id) }
    />
    <IconButton onClick={ handleDelete }>
      <DeleteIcon />
    </IconButton>
    <IconButton onClick={ handleEdit }>
      <EditIcon />
    </IconButton>
  </div>

  );
}

TaskItem.propTypes = {
  item: shape({
      _id: string.isRequired,
      name: string.isRequired,
      status: string.isRequired,
      task: string.isRequired,
    }),
};
