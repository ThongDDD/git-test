import React, { Component } from 'react'

class Child extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: ''
    }
    this.handleChangeStateChild = this.handleChangeStateChild.bind(this);
  }

  componentDidMount() {
    console.log('class child - componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('class child - componentDidUpdate --out-side')
    const { num } = this.state
    if(prevState.num !== num) {
      console.log('class child - componentDidUpdate', num)
    }
  }

  handleChangeStateChild() {
    this.setState({ num: Math.random() })
  }

  render() {
    const { str } = this.props
    return (
      <div>
        Child ->
        <button className="btn btn-warning" onClick={this.handleChangeStateChild}>
          Change state child
        </button>
        {str}
      </div>
    )
  }
}

export default Child
