import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({ count: this.state.count + this.props.step }, () =>
            this.props.onChange(this.state.count)
        );
    }

    decrement() {
        this.setState({ count: this.state.count - this.props.step }, () =>
            this.props.onChange(this.state.count)
        );
    }

    render() {
        const styles = {
            button: {
                color: 'white',
                backgroundColor: '#367ac3',
                width: 'calc(50% - 8px)'
            },
            label: { fontSize: '6rem', textAlign: 'center' }
        };

        return (
            <div>
                <button style={styles.button} onClick={this.decrement}>
                    -
                </button>
                <button style={styles.button} onClick={this.increment}>
                    +
                </button>
                <h1 style={styles.label}>{this.state.count}</h1>
            </div>
        );
    }
}

Counter.propTypes = {
    step: PropTypes.number,
    onChange: PropTypes.func
};

Counter.defaultProps = { step: 1 };

export default Counter;
