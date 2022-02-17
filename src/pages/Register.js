import React from 'react';
import TextField from '@mui/material/TextField';
import './register.css';
import { Button } from '@mui/material';

export default function Register() {
  return (
    <form className="container-form">
      <div className="content-form">
        <TextField
          className="content-field"
          required
          id="outlined-required"
          label="name"
        />
        <TextField
          className="content-field"
          required
          id="outlined-email-input"
          label="email"
          type="email"
        />
        <TextField
          className="content-field"
          required
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <Button
          variant="contained"
          size="large"
        >
          Register
        </Button>
      </div>
    </form>
  );
}
