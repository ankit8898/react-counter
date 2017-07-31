import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

var CounterButton = function(props) {
  return (
    <Button bsStyle={props.style} onClick={props.onClickHandler}>Add {props.value}</Button>
  )
}

export default CounterButton;
