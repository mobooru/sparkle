import React, { Component } from 'react'
import * as styles from './styles'

class Scroller extends Component {
  render () {
    return (
      <div style={styles.scroller}>
        {this.props.children}
      </div>
    )
  }
}

export default Scroller
