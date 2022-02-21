import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputLabel, FormControl, Select, TextField, IconButton, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { shape, string, func } from 'prop-types';
import fetchByMethod from '../fecthApi';

import './taskitem.css';

export default function TaskItem({ item, sendChangesToFather }) {
  const [textValue, setTextValue] = useState(item.task);
  const [saveButton, setSaveButton] = useState(false);

  const handleChangeSelect = async (event) => {
    const taskInfo = { task: item.task, status: event.target.value };
    sendChangesToFather({ _id: item._id, ...taskInfo });
    await fetchByMethod.fetchUpdateTask(item._id, taskInfo);
  };

  const handleChangeTextField = ({currentTarget}) => {
    setTextValue(currentTarget.value);
  };
  
  const handleDelete = async () => {
    await fetchByMethod.fetchRemoveTask(item._id);
    sendChangesToFather({ _id: item._id });
  };

  const renderEditButton = () => (
    <IconButton
      onClick={ () => setSaveButton((prevState) => !prevState) }
      className="icon-button"
    >
      <EditIcon />
    </IconButton>
  );

  const handleSave = async (event) => {
    event.preventDefault();
    const taskInfo = { task: textValue, status: item.status };
    sendChangesToFather({ _id: item._id, ...taskInfo });
    await fetchByMethod.fetchUpdateTask(item._id, taskInfo);
    setSaveButton((prevState) => !prevState);
  };

  const renderSaveButton = () => (
    <IconButton
      onClick={ handleSave }
      className="icon-button"
      >
      <SaveIcon />
    </IconButton>
  );
  
  const renderSaveOrEditButton = () => {
    return !saveButton ? renderEditButton() : renderSaveButton();
  };
  
  const options = ['To do', 'Pending', 'Done' ];

  const chooseVariant = () => !saveButton ? 'outlined' : 'filled';

  const chooseLabel = () => !saveButton ? '' : 'Editando';

  return (
    <div
    key={item._id + 1}
    className="container-task"
    >
    <div className="date">
      Criado em: { item.createdAt.split(' ')[0] }
    </div>

    <div
      className="buttons-container"
      >
      <TextField
        key={item._id}
        onKeyPress={ (event) => event.key === 'Enter' && handleSave(event) }
        label={ chooseLabel() }
        variant={ chooseVariant() }
        sx={{ width: '100%' }}
        className="content-field"
        required
        id="outlined-text-input"
        type="text"
        name="text"
        value={textValue}
        disabled={!saveButton}
        onChange={ handleChangeTextField }
      />
        { renderSaveOrEditButton() }
    </div>

    <div className="select-edit-remove">
      <Box className="select">
        <FormControl
        fullWidth
        variant="standard"
        >
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
      <div>
        <IconButton
          onClick={ handleDelete }
          className="icon-button"
        >
          <DeleteIcon />
        </IconButton>
      </div>
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
