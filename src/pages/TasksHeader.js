import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';
import { colors } from '@mui/material/';
import { getUserName } from '../localStorage';

import './taskPage.css';

export default function TasksPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header-task-page">
        <div className="add-task-logo">
          <AddTaskIcon sx={{ fontSize: 25, color: colors.blue[200] }} />
          <Box sx={{ fontSize: 20, color: colors.blue[200] }} >Add</Box>
          <Box sx={{ fontSize: 15, color: colors.blue[200] }} >Task</Box>
        </div>
        <h3>
          <Box sx={{ color: '#f8efed' }}>
            Hello, { getUserName() }!
          </Box>
        </h3>
      </div>
      <div className="logout-icon">
        <Button
          className="content-field"
          variant="text"
          size="large"
          type="submit"
        >
          <LogoutIcon
            sx={{ fontSize: 25, color: colors.blue[100] }}
            onClick={ () => navigate('/login') & localStorage.clear() }
          />
        </Button>
      </ div>
    </div>
  );
}
