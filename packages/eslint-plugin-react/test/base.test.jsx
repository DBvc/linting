import React, { Component } from 'react'

const HButton = ({ children }) => <button>{children}</button>
let a
class HelloWorld extends Component {
  handleClick() {
    console.log('je;l;p-')
  }

  render() {
    debugger
    return (
      <HButton onClick={this.handleClick.bind(this)} disabled />
    )
  }
}
