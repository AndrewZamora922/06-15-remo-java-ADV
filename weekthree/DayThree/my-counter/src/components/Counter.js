import React, { Component } from "react";
import {connect} from 'react-redux'

class Counter extends Component {
    // state = {
    //     count: 0
    // }

    handleIncrument = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.props.dispatch({type: 'INCRUMENT'})
    }

    handleDecrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.props.dispatch({type: 'DECREMENT'})
    }

    render() {
        return (
            <div>
                <span>Count:{this.props.count}</span>
                <button onClick={this.handleIncrument}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(Counter);