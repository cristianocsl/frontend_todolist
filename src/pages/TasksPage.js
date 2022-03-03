import React from 'react';
import { useNavigate } from 'react-router-dom';
import TasksComponent from '../components/TasksComponent';
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
          <AddTaskIcon sx={{ fontSize: 25, color: colors.blue[900] }} />
          <Box sx={{ fontSize: 20, color: colors.blue[600] }} >Add</Box>
          <Box sx={{ fontSize: 15, color: colors.blue[300] }} >Task</Box>
        </div>
        <h3>
          <Box sx={{ color: colors.blue[900] }}>
            Olá, { getUserName() }!
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
            sx={{ fontSize: 25, color: colors.blue[900] }}
            onClick={ () => navigate('/login') }
          />
        </Button>
      </ div>
        <TasksComponent />
    </div>
  );
}
