import React, { Component } from 'react'
import * as styles from './styles'

class Input extends Component {
  render () {
    return (
      <input style={{ ...styles.input, ...(this.props.theme && { border: `1px solid ${this.props.theme.card.border}`, background: this.props.theme.card.background, color: this.props.theme.card.color }), ...this.props.style }} onChange={this.props.onChange} value={this.props.value || ''} ref='input' placeholder={this.props.placeholder || ''} type={this.props.type || ''} />
    )
  }
}

export default Input
