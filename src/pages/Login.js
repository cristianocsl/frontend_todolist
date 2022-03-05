import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './register.css';
import { Alert, Box, Button, LinearProgress, Stack } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import fetchByMethod from '../fecthApi';
import { colors } from '@mui/material/';

export default function login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await fetchByMethod.loginPost(fields);

    !response.token
      ? setErrorMessage(response)
      : setSuccessMessage(response.message)
      & setTimeout(() => navigate('/tasks'), 3000);
    
    setLoading((prevState) => !prevState);
  };

  return (
    <form
      className="container-form"
      onSubmit={ handleSubmit }
    >
      <div className="content-form">
        <div>
          <AddTaskIcon sx={{ fontSize: 170, color: colors.blue[800] }} />
          <Box sx={{ fontSize: 60, color: colors.blue[600] }} >Add</Box>
          <Box sx={{ fontSize: 40, color: colors.blue[300] }} >Task</Box>
          { loading ? <LinearProgress /> : '' }
        </div>
        <TextField
          sx={{ width: '100%' }}
          className="content-field"
          required
          id="outlined-email-input-login"
          label="email"
          type="email"
          name="email"
          onChange={ handleChange }
        />
        <TextField
          sx={{ width: '100%' }}
          className="content-field"
          required
          id="outlined-password-input-login"
          label="Password"
          type="password"
          name="password"
          onChange={ handleChange }
        />
        <Button
          className="content-field"
          variant="contained"
          size="large"
          type="submit"
        >
          Log In
        </Button>
        <span
          hidden={ !errorMessage || successMessage }
        >
          <Stack
            className="content-field"
            sx={{ width: '100%' }}
            spacing={2}
            >
            <Alert
              severity="error"
            >
              { errorMessage }
            </Alert>
          </Stack>
        </span>
        <span
        hidden={ !successMessage }
        >
          <Stack
            className="content-field"
            sx={{ width: '100%' }}
            spacing={2}
            >
            <Alert
              severity="success"
            >
              { successMessage }
            </Alert>
          </Stack>
        </span>
        <span>
          New to here?  <Link to="/register">Sign Up</Link>
        </span>
      </div>
    </form>
  );
}
