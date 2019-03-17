import React, { Component } from 'react'

import Hover from './Hover'
import * as styles from './styles'

class Button extends Component {
  render () {
    return (
      <Hover style={{ ...styles.button, ...(this.props.theme && { border: `1px solid ${this.props.theme.card.border}`, background: this.props.theme.card.background, color: this.props.theme.card.color, hover: this.props.theme.card.hover }), ...(this.props.primary && styles.buttonPrimary), ...(this.props.disabled && styles.buttonDisabled), ...this.props.style }} onClick={this.props.disabled ? () => {} : this.props.onClick}>
        {this.props.children}
      </Hover>
    )
  }
}

export default Button
