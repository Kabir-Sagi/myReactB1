import React, { Component } from 'react'
import myContext from './ContextObject'

export default class D extends Component {
    render() {
        return (
            <div>
                <h2>D Component</h2>

                  <myContext.Consumer>
                      {
                          (data)=>{
                             return <div>
                                
                                 <p>{data.city}</p>
                             </div>
                          }

                      }
                  </myContext.Consumer>
            </div>
        )
    }
}
