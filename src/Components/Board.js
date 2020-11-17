import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className='row'>
                    <Square id={1}/>
                    <Square id={2}/>
                    <Square id={3}/>
                </div>
                <div className='row'>
                    <Square id={4}/>
                    <Square id={5}/>
                    <Square id={6}/>
                </div>
                <div className='row'>
                    <Square id={7}/>
                    <Square id={8}/>
                    <Square id={9}/>
                </div>
               
            </div>
        )
    }
}
