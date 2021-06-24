import React, { Component } from 'react'
import Hoc from './Hoc'

 class Text extends Component {
     constructor(props) {
         super(props)
     
        
     }
     
    
    render() {
        return (
            <div className="mt-5">
                <h5>Text Component</h5>
                <p className="lead" onMouseOver={this.props.incCount}>{this.props.name} Hovered  {this.props.count} times</p>
            </div>
        )
    }
}
export default Hoc(Text,{
    countNumber:10,
    name:"Text"
})
