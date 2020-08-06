import React, { Component } from 'react'
import Child from './Child'

class Class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      str: ''
    }
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  componentDidMount() {
    console.log('class parent - componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.str !== this.state.str) {
      console.log('class parent - componentDidUpdate')
    }
  }

  handleChangeState() {
    this.setState({ str: Math.random() })
  }

  render() {
    const { str } = this.state;
    return (
      <div className="container">
        Parent ->
        <button className="btn btn-danger" onClick={this.handleChangeState}>
          Change state
        </button>
        <Child str={str} />
      </div>
    )
  }
}

export default Class
