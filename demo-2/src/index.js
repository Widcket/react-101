import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

const App = () => (
    <div style={styles}>
        <Counter />
    </div>
);

render(<App />, document.getElementById('root'));
