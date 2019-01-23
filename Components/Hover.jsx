import React, { Component } from 'react'

class Hover extends Component {
  constructor (props) {
    super(props)
    this.state = { hover: false }

    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  mouseEnter (e) {
    this.setState({ hover: true })
  }

  mouseLeave (e) {
    this.setState({ hover: false })
  }

  render () {
    return (
      <div
        style={{ ...this.props.style, ...(this.state.hover && this.props.style.hover) }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Hover
