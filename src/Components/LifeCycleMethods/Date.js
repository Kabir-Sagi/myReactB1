import React, { Component } from 'react'

export default class Date1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             time: new Date()
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    componentDidMount() {
      this.timer=  setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000)
    }
    
    render() {
        return (
            <div className="container">
                  <div className="row">
                      <div className="col-sm-5">
                        <div className="card">
                            <div className="card-header bg-primary text-white">Todays Time</div>
                            <div className="card-body">
                                <p>{this.state.time.toLocaleTimeString()}</p>
                            </div>
                        </div>

                      </div>
                  </div>
            </div>
        )
    }
}
