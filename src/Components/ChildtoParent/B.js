import React, { Component } from 'react'

export default class B extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Kabir" ,
            city:"Hyd"
        }
    }
    passData = ()=>{
        this.props.upDateState(this.state.name,this.state.city)
    }
    
    render() {
        return (
            <div>
                 <h2>Child Component</h2>
                <button onClick={this.passData}>Pass Data</button>
            </div>
        )
    }
}
