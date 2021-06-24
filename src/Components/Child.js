import React from 'react'

class Child extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
              name:"Kabir",
              city:"Delhi"
        }
    }
     passData = ()=>{
       this.props.upDateState(this.state.name,this.state.city)
     }
    render() {
        return <div>
            <h2>It is a Child Component</h2>
            <button onClick={this.passData}>Pass data to Parent</button>
        </div>
    }
    
}

export default Child