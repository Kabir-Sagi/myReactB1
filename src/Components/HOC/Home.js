import React, { Component } from 'react'
import Button from './Button'
import Text from './Text'

export default class Home extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h3>Higher Order Component</h3>
                <Button />
                <Text />
            </div>
        )
    }
}
