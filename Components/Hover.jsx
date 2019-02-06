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
    this.props.update && this.props.update(true)
  }

  mouseLeave (e) {
    this.setState({ hover: false })
    this.props.update && this.props.update(false)
  }

  render () {
    return (
      <div
        {...this.props.props}
        onClick={this.props.onClick}
        style={{ ...this.props.style || {}, ...(this.state.hover && (this.props.style || {}).hover) }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Hover
