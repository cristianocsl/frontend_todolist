import React from 'react';
import { Button } from '@mui/material';
import { string, func, shape, oneOfType } from 'prop-types';


const FilterButton = ({ text, handleClick, heightValue }) =>{
  return <Button
      className="content-field"
      variant="contained"
      size="large"
      type="button"
      sx={{ height: heightValue, textTransform: 'capitalize', fontWeight: 600 }}
      onClick={ handleClick }
      >
        { text }
    </Button>;
};

export default FilterButton;

FilterButton.propTypes = {
  text: oneOfType([string, shape({})]).isRequired,
  heightValue: string,
  handleClick: func.isRequired,
};
