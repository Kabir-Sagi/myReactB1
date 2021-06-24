import React, { Component } from 'react'
import myContext from './ContextObj'


export default class D extends Component {
    render() {
        return (
            <div>
               <h4>D Component</h4> 
               <myContext.Consumer>

                  {
                       (Data)=>{
                        return <div>
                            <h5>Name:{Data.name}</h5>
                            <h5>Email:{Data.email}</h5>
                            <p>------------------------------------</p>
                            <h5>EmailId:{Data.userData.length > 0 ? Data.userData[0].email:null}</h5>
                        </div>
                       }

                  }   
               </myContext.Consumer>

            </div>
        )
    }
}
