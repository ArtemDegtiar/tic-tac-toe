import React, { Component } from 'react'

export default class Square extends Component {
  
   

    render() {
       
        return (
        <button 
         className="Square" 
         onClick={() => this.props.onClick()}
        >
         {this.props.value}
        </button> 
        
        )
    }
}
