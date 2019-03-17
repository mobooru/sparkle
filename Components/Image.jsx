import React, { Component } from 'react'

import * as styles from './styles'

class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      ploaded: false
    }

    this.onLoad = this.onLoad.bind(this)
    this.PonLoad = this.PonLoad.bind(this)
  }

  onLoad () {
    this.setState({ loaded: true })
  }

  PonLoad () {
    this.setState({ ploaded: true })
  }

  render () {
    const imageStyle = styles.image.image(this.props.contain === true, this.props.blur, this.props.scaleIn, this.props.transitionSpeed)
    const loadedStyle = styles.image.loaded
    return (
      <div style={{ ...styles.image, ...(this.props.style || {}) }}>
        <img style={{
          ...imageStyle,
          ...(this.state.loaded && loadedStyle),
          ...this.props.imageStyle
        }} src={this.state.ploaded || !this.props.thumbnail ? (this.props.src || '') : ''} onLoad={this.onLoad} />
        <img style={{
          ...imageStyle,
          ...(this.state.loaded && loadedStyle),
          ...{ opacity: this.state.ploaded ? (this.state.loaded ? 0 : 1) : 0 },
          ...this.props.thumbnailStyle
        }} src={this.props.thumbnail || ''} onLoad={this.PonLoad} />
        {this.props.children}
      </div>
    )
  }
}

export default Image
