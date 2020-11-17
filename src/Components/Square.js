import React, { Component } from 'react'

export default class Square extends Component {
    render() {
        return (
        <button className="Square" >{this.props.id}</button> 
        )
    }
}
