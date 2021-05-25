import React, { Component } from 'react';

class CounterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            date: new Date()

        }
    }

        increment = () => {
            this.setState( {
                count: this.state.count + 1,
            })


        };

        decrement = () => {
            if (this.state.count < 1) {
                return;
            }
            this.setState( {
                count: this.state.count -1

            })

        }

        render() {
            return (
                <div>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.increment}>Add + </button>
                    <button onClick={this.decrement}>Subtract - </button>
                </div>
            );
        }
    }

    export default CounterComponent;