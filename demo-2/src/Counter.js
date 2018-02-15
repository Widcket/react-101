import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);

        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const styles = {
            button: {
                color: 'white',
                backgroundColor: '#367ac3',
                width: '100%'
            },
            label: { fontSize: '6rem' }
        };

        return (
            <div>
                <button style={styles.button} onClick={this.increment}>
                    +
                </button>
                <h1 style={styles.label}>{this.state.count}</h1>
            </div>
        );
    }
}

export default Counter;
