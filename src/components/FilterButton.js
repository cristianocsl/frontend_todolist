import React from 'react';
import { Button } from '@mui/material';
import { string, func } from 'prop-types';


const FilterButton = ({ text, handleClick, heightValue }) =>{
  return <Button
      className="content-field"
      variant="contained"
      size="large"
      type="button"
      sx={{ height: heightValue }}
      onClick={ handleClick }
      >
        { text }
    </Button>;
};

export default FilterButton;

FilterButton.propTypes = {
  text: string.isRequired,
  heightValue: string,
  handleClick: func.isRequired,
};
