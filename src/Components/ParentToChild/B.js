import React, { Component } from 'react'

 class B extends Component {
    constructor(props) {
        super(props)
    
       
    }
    
    render() {
        return (
            <div>
                <h2>B Component</h2>
                <p>Name:{this.props.data.name}</p>
                <p>City:{this.props.data.city}</p>
            </div>
        )
    }
}
export default B
