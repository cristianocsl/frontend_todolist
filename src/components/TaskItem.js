import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputLabel, FormControl, Select, TextField, IconButton, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { shape, string, func } from 'prop-types';
import './taskitem.css';

export default function TaskItem({ item, sendChangesToFather }) {
  const [textValue, setTextValue] = useState(item.task);

  const handleChangeSelect = (event) => {
    sendChangesToFather({ _id: item._id, status: event.target.value, task: item.task});
  };

  const handleChangeTextField = ({currentTarget}) => {
    setTextValue(currentTarget.value);
  };
  
  const handleDelete = () => {};

  const handleEdit = () => {};

  const options = ['To do', 'Pending', 'Done' ];

  return (
    <div
    key={item._id + 1}
    className="container-task"
  >
    <div className="date">
      Criado em: { item.createdAt.split(' ')[0] }
    </div>

    <div className="select-edit-remove">
      <Box className="select">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={item.status}
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
      <div className="buttons-container">
        <IconButton onClick={ handleDelete } className="icon-button">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={ handleEdit } className="icon-button">
          <EditIcon />
        </IconButton>
      </div>
    </div>
    <div>
      <TextField
        key={item._id}
        sx={{ width: '100%' }}
        className="content-field"
        required
        id="outlined-text-input"
        type="text"
        name="text"
        value={textValue}
        onChange={handleChangeTextField}
        />
    </div>
  </div>
  );
}

TaskItem.propTypes = {
  item: shape({
      _id: string.isRequired,
      status: string.isRequired,
      task: string.isRequired,
      createdAt: string.isRequired,
    }),
  sendChangesToFather: func.isRequired,
};
