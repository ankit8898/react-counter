import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';


var ResetButton = function(props) {
  return (
    <Button bsStyle={props.style} onClick={props.onClickHandler}>
      Reset
    </Button>
  )
}

export default ResetButton;