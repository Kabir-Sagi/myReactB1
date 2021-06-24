import React, { Component } from 'react'
import B from './B'

export default class A extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           name:'',
           city:''   
        }
    }

    upDateState = (name,city)=>{
        this.setState({
            name:name,
            city:city
        })
    }
    
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <p>Name:{this.state.name}</p>
                <p>City:{this.state.city}</p>
                <B upDateState = {this.upDateState} />
            </div>
        )
    }
}
