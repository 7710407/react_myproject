import { Component } from "react";

class Counter2 extends Component {
    constructor() {
        super();
        this.state = { counter: 0,}
        //this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        return (
            <>
                <h3>Count value is: {this.state.counter} </h3>
                <button onClick={() => this.increment()}>Increment</button>
            </>
            );
    }
}

export default Counter2;