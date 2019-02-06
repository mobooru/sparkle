import React, { Component } from 'react'

import * as styles from './styles'

class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }

    this.onLoad = this.onLoad.bind(this)
  }

  onLoad () {
    this.setState({ loaded: true })
  }

  render () {
    const imageStyle = styles.image.image(this.props.contain === true, this.props.blur, this.props.scaleIn, this.props.transitionSpeed)
    const loadedStyle = styles.image.loaded
    return (
      <div style={{ ...styles.image, ...(this.props.style || {}) }}>
        <img style={{
          ...imageStyle,
          ...(this.state.loaded && loadedStyle)
        }} src={this.props.src || ''} onLoad={this.onLoad} />
        <img style={{
          ...imageStyle,
          ...(this.state.loaded && loadedStyle),
          ...{ opacity: (this.state.loaded ? 0 : 1) }
        }} src={this.props.thumbnail || ''} />
        {this.props.children}
      </div>
    )
  }
}

export default Image
