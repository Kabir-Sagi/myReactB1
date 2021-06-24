import React, { Component } from 'react'
import D from './D'
import myContext from './ContextObj'

export default class C extends Component {
    render() {
        return (
            <div>
                <h4>C Component</h4>
                <myContext.Consumer>

                    {
                           (data)=>{
                             return <div>
                                  <h5>City:{data.city}</h5>
                                  <p>-------------------------------------------</p>
                                  <h5>Name:{data.userData.length > 0 ?data.userData[0].name : null}</h5>
                                  
                             </div>
                           }

                    }
                </myContext.Consumer>
                <D  />
            </div>
        )
    }
}
