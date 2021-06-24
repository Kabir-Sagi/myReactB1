import React, { Component } from 'react'
import C from './C'

export default class B extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h2>B Component</h2>
                <C />
            </div>
        )
    }
}
