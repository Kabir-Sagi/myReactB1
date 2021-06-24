import React, { Component } from 'react'
import D from './D'
import myContext from './ContextObject'

export default class C extends Component {
    render() {
        return (
            <div>
                <h2>C Component</h2>
                <myContext.Consumer>
                 {
                     (data)=>{
                        return <div>
                            <p>{data.name}</p>
                        </div>
                     }
                 }

                </myContext.Consumer>
                <D />
            </div>
        )
    }
}
