import React from 'react';
import { render } from 'react-dom';

const Message = props => <h1>Hola {props.to}!</h1>;

render(<Message to="mundo" />, document.getElementById('root'));
