import React, { Component } from 'react'

 class Login extends Component {
     constructor(props) {
         super(props)
         this.state ={
             name:'',
             password:''
         }
     
          this.input1 = React.createRef()
              this.input2 =   React.createRef()
     }

     getData = ()=>{
        
           console.log(this.state.name,this.state.password)
     }
     
    render() {
        return (
            <div className="container mt-5">
                  <div className="row">
                      <div className="col-sm-4"></div>
                      <div className="col-sm-4">
                          <h2>Login Component</h2>
                      <div className="form-group mt-3">
                       <input className="form-control" type="text"
                        placeholder="Enter UserName" onChange={(event)=>{this.setState({
                            name:event.target.value
                        })}} />
                   </div>
                   <div className="form-group mt-2">
                       <input className="form-control" type="password" placeholder="Enter Password"
                       
                      onChange={(event)=>{this.setState({
                          password:event.target.value
                      })}}/>
                   </div>
                   <div>
                       <button className="btn btn-primary px-5 mt-3" onClick={this.getData}>Login</button>
                   </div>
                      </div>
                  </div>
                   
            </div>
        )
    }
}
export default Login
