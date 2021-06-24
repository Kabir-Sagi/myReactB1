import React, { Component } from 'react'

export default class lifecycle extends Component {
    constructor(props) {
        super(props)
     console.log("1.Constructor")
     this.state = {
         name:"Kabir"
     }
       
    }
    static getDerivedStateFromProps() {
        console.log("2.getDerivedStateFromProps ")
    }
     shouldComponentUpdate(){
         console.log("shouldComponentUpdate")
         return false
     }
     getSnapshotBeforeUpdate() {
         console.log(" getSnapshotBeforeUpdate")
     }

     componentWillUnmount(){
         console.log("Component Will be removed")
         alert("Component will be removed")
     }
    
    componentDidMount() {
        console.log("4.ComponentDidMount")
    }
     componentDidUpdate(){
         console.log("ComponentDidUpdate")
     }
    render() {
        console.log("3. render")
        return (
            <div>
               <h2>Life cycle Component</h2> 
               <button onClick={()=>{this.setState({
                   name:"Ayansh"
               })}}>Click me</button>
            </div>
        )
    }
}
