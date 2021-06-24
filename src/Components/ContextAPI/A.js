import React, { Component } from 'react'
import B from './B'
import myContext from './ContextObj'
import Axios from 'axios'

export default class A extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData:[],
             name:"Ryan",
             email:"Ryan@gmail.com",
             city:"Delhi",
             Phone:9999999999
        }
    }
       componentDidMount() {
        // Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        //     console.log(response)
        //     this.setState({
        //         userData:response.data
        //     })
        // },(error)=>{
        //     alert("Error")
        // })
       }

       upDateState = ()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response)
            this.setState({
                userData:response.data
            })
        },(error)=>{
            alert("Error")
        })
        //    this.setState({
        //        name:"Rahul",
        //        city:"Hyderabad"
        //    })
       }
    
    render() {
        return (
            <div>
                 <h4>A Component</h4>
                 <button onClick={this.upDateState}>UpdataState</button>
                 <myContext.Provider value={this.state}>
                 <B />
                     
                      </myContext.Provider>
             
            </div>
        )
    }
}
