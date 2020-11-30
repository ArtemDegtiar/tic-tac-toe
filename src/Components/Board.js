import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    constructor(props){

        super(props)
        this.state = {
            squares: Array(9).fill(null),
            player: 1

        }

    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if(squares[i]== null){
             if (this.state.player == 1){
            squares[i] = 'X';
            this.setState({
                player: this.state.player = 2
            })
        }else if (this.state.player == 2){
            squares[i] = 'O';
            this.setState({
                player: this.state.player = 1
            })
        }
        }
       
        this.setState({squares: squares});
        
      }
    
   
    renderSquare(id){
      return(  
        <Square 
            value={this.state.squares[id]}  
            onClick={() => this.handleClick(id)}
        />
    )}

   
    render() {






        return (
            <div className="board">
                <div className='row'>
                   {this.renderSquare(0)}
                   {this.renderSquare(1)}
                   {this.renderSquare(2)}
                </div>
                <div className='row'>
                   {this.renderSquare(3)}
                   {this.renderSquare(4)}
                   {this.renderSquare(5)}
                </div>
                <div className='row'>
                   {this.renderSquare(6)}
                   {this.renderSquare(7)}
                   {this.renderSquare(8)}
                </div>
               
            </div>
        )
    }
}
