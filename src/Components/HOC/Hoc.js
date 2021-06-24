import React from 'react'

const ResuableComp = (MyComponent,Information)=>{

    class ResuableComp extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:Information.countNumber,
                 name:Information.name
            }
        }
      incCount = ()=>{
          this.setState({
              count:this.state.count + 1
          })
      }   
        render() {
            return <MyComponent count={this.state.count} incCount={this.incCount} name={this.state.name} />
        }
    }
 return ResuableComp

}

export default ResuableComp