import React from 'react';
import { Button } from '@mui/material';
import { string, func } from 'prop-types';


const FilterButton = ({ text, handleClick }) =>{
  return <Button
      className="content-field"
      variant="contained"
      size="large"
      type="button"
      onClick={ handleClick }
      >
        { text }
    </Button>;
};

export default FilterButton;

FilterButton.propTypes = {
  text: string.isRequired,
  handleClick: func.isRequired,
};
