import React, { Component } from 'react'
import Hoc from './Hoc'

 class Button extends Component {
     constructor(props) {
         super(props)
     
         
     }
     
     
    render() {
        return (
            <div className="mt-5">
                <h5>Button Component</h5>
                <button className="btn btn-primary px-3" onClick={this.props.incCount}>{this.props.name} Clicked  {this.props.count} Times</button>
            </div>
        )
    }
}

export default Hoc(Button,{
    countNumber:100,
    name:"Button"
})
