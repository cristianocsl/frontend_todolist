import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputLabel, FormControl, Select, TextField, IconButton, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { shape, string, func } from 'prop-types';

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
    <Box sx={{ minWidth: 110 }}>
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
  sendChangesToFather: func.isRequired,
};
