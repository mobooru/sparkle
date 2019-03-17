import React, { Component } from 'react'
import * as styles from './styles'

class Modal extends Component {
  render () {
    return (
      <div style={{ ...styles.modalContainer, ...this.props.containerStyle }} className={this.props.className}>
        <div style={{ ...styles.modal, ...this.props.style }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal
