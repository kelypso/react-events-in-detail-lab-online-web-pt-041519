import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

}
