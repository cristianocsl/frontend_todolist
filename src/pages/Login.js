import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './register.css';
import { Alert, Button, Stack } from '@mui/material';
import fetchByMethod from '../fecthApi';

const POST_LOGIN = 'postLogin';

export default function login() {
  const [errorMessage, setErrorMessage] = useState('');
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
    const response = await fetchByMethod(POST_LOGIN, fields);
    response.token ? setErrorMessage() : setErrorMessage(response);
    setFields({ ...fields, email: '', password: ''});
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
          Login
        </Button>
        <span
        hidden={ !errorMessage }
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
      </div>
    </form>
  );
}
