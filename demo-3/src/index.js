import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

class App extends Component {
    onCounterChange(value) {
        console.info(value);
    }

    render() {
        return (
            <div style={styles}>
                <Counter step={1} onChange={this.onCounterChange} />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
