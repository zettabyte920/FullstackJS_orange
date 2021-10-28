import React from "react"
class Ex1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.state.count = this.state.count + 1
    }
    decrement = () => {
        this.state.count = this.state.count - 1
    }
    render() {
        return (
            <>
                Valeur de compteur {this.state.count}<br />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        );
    }
}

export default Ex1;