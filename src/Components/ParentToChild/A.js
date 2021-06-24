import React, { Component } from 'react'
import B from './B'
 class A extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
          name:"Kabir",
          city:"Hyd"     
         }
     }

      changeName = ()=>{
           this.setState({
               name:"Vamshi"
           })
      }
     
    render() {
        return (
            <div>
              <h2>A Component</h2>  
              <button className="btn btn-primary mt-2" onClick={this.changeName}>Change Name</button>
              <B data={this.state} />
            </div>
        )
    }
}
export default A
