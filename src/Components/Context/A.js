import React, { Component } from 'react'
import B from './B'
import myContext from './ContextObject'

export default class A extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              name:"Kabir",
              city:"Delhi"
        }
    }
    
    render() {
        return (
            <div>
                <h2>A Component</h2> 
                <myContext.Provider value={this.state}>
                <B />
                </myContext.Provider>
              
            </div>
        )
    }
}
