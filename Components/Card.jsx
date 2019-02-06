import React, { Component } from 'react'

import { shadow, card } from './styles'

class Card extends Component {
  render () {
    return (
      <div style={{ ...card, ...shadow.deep, ...this.props.style }}>
        <h1 style={card.title}>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Card
