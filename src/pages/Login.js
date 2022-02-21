import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './register.css';
import { Alert, Button, Stack } from '@mui/material';
import fetchByMethod from '../fecthApi';

export default function login() {
  const navigate = useNavigate();
  const [apiMessage, setApiMessage] = useState('');
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
    response.token ? setApiMessage() : setApiMessage(response);
    setFields({ ...fields, email: '', password: ''});
    navigate('/tasks');
  };

  return (
    <form
      className="container-form"
      onSubmit={ handleSubmit }
    >
      <div className="content-form">
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
        hidden={ !apiMessage }
        >
          <Stack
            className="content-field"
            sx={{ width: '100%' }}
            spacing={2}
            >
            <Alert
              severity="error"
            >
              { apiMessage }
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
