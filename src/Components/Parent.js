import React from 'react'
import Child from './Child'

class Parent extends React.Component {
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
        return <div>
              <h2>It is a Parent Component</h2>
              <p>{this.state.name}</p>
              <p>{this.state.city}</p>
              <Child  upDateState ={this.upDateState}/>
        </div>
    }
    
}

export default Parent