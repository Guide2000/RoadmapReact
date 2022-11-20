import React, { Component } from "react";

class State extends Component {
    // ------------------------------------------^
    constructor() {
        super();
        this.state = {
            name: "Moon",
            count: 0
        }
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count +1)
    }

    change (){
        this.setState({name:"Moon By State"})
        console.log(this.state.name)
    }

    render() {

        return (
            <div style={{ textAlign: 'center' }}>
                <h1> {this.state.name} </h1>
                <button onClick={() => this.change()}>Click for Change</button>
                <h1> {this.state.count} </h1>
                <button onClick={() => this.increase()}>Click for Increase</button>
            </div>
        );
    }
}

export default State;