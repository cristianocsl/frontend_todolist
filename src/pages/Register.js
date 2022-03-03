import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Alert, Button, Stack, Box, LinearProgress } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { colors } from '@mui/material/';
import fetchByMethod from '../fecthApi';
import './register.css';

export default function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: '',
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
    const response = await fetchByMethod.postRegister(fields);

    !response.token
      ? setErrorMessage(response)
      : setSuccessMessage(response.message)
      & setTimeout(() => navigate('/login'), 4500);
    
    !errorMessage
      ? setLoading((prevState) => prevState)
      : setLoading((prevState) => !prevState);
  };

  return (
    <form
      className="container-form"
      onSubmit={ handleSubmit }
    >
      <div className="content-form">
        <div>
          <AddTaskIcon sx={{ fontSize: 125, color: colors.blue[800] }} />
          <Box sx={{ fontSize: 30, color: colors.blue[600] }} >Add</Box>
          <Box sx={{ fontSize: 20, color: colors.blue[300] }} >Task</Box>
          { loading ? <LinearProgress /> : '' }
        </div>
        <TextField
          className="content-field"
          sx={{ width: '100%' }}
          required
          id="outlined-required"
          label="name"
          name="name"
          onChange={ handleChange }
        />
        <TextField
          sx={{ width: '100%' }}
          className="content-field"
          required
          id="outlined-email-input"
          label="email"
          type="email"
          name="email"
          onChange={ handleChange }
        />
        <TextField
          sx={{ width: '100%' }}
          className="content-field"
          required
          id="outlined-password-input"
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
          Register
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
          Go back to <Link to="/login">Log In</Link>
        </span>
      </div>
    </form>
  );
}
