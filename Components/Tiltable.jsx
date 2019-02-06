import React, { Component } from 'react'

import * as styles from './styles'

class Tiltable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      style: { transform: 'rotateX(0deg) rotateY(0deg) scale(1.0)' }
    }

    this.mousemove = this.mousemove.bind(this)
    this.mouseleave = this.mouseleave.bind(this)
    this.mouseenter = this.mouseenter.bind(this)
  }

  componentDidMount () {
    this.refs.container.addEventListener('mouseleave', this.mouseleave, false)
    this.refs.container.addEventListener('mouseenter', this.mouseenter, false)
  }

  componentWillUnmount () {
    this.refs.container.removeEventListener('mouseleave', this.mouseleave, false)
    this.refs.container.removeEventListener('mouseenter', this.mouseenter, false)
  }

  mousemove (e) {
    const xScale = this.refs.item.clientWidth
    const yScale = this.refs.item.clientHeight
    const x = (e.offsetX - this.refs.item.clientWidth / 2) / xScale
    const y = (e.offsetY - this.refs.item.clientHeight / 2) / yScale

    this.setState({ style: { transform: `rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.025)` } })
  }

  mouseleave (e) {
    this.setState({ style: { transform: `rotateX(0deg) rotateY(0deg) scale(1.0)`, transition: 'transform 0.15s' } })
    this.refs.container.removeEventListener('mousemove', this.mousemove, false)
  }

  mouseenter (e) {
    const xScale = this.refs.item.clientWidth
    const yScale = this.refs.item.clientHeight
    const x = (e.offsetX - this.refs.item.clientWidth / 2) / xScale
    const y = (e.offsetY - this.refs.item.clientHeight / 2) / yScale

    this.setState({ style: { transform: `rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.025)`, transition: 'transform 0.15s' } })
    setTimeout(() => {
      this.setState({ style: { ...this.state.style, transition: 'transform 0s' } })
      this.refs.container.addEventListener('mousemove', this.mousemove, false)
    }, 150)
  }

  render () {
    return (
      <div ref='container' style={{ ...styles.tiltable.container, ...this.props.style }}>
        <div ref='item' style={{ ...styles.tiltable, ...this.props.itemStyle, ...this.state.style }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Tiltable
