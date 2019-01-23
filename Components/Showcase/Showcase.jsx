import React, { Component } from 'react'
import Connector from 'Connector'

import Hover from 'Generic/Hover'

import * as styles from './styles'

import Scroller from './Scroller'
import DemoCard from './DemoCard'

class UIShowcase extends Component {
  render () {
    return (
      <div className='route'>
        <Scroller>
          <div style={styles.scroller.header}>
            <h1 style={styles.scroller.header.title}>Mobooru Sparkle.</h1>
            <h1 style={styles.scroller.header.subtitle}>UI Components.</h1>
          </div>
          <HoverShowcase />
          <CardShowcase />
        </Scroller>
      </div>
    )
  }
}

class HoverShowcase extends Component {
  render () {
    const style = { background: '#f16a6a', padding: 12, borderRadius: 6, hover: { background: '#72f16a' } }
    return (
      <DemoCard
        title={'Generic/Hover'}
        description={'Changes style on mouse enter / leave.'}
        demoCode={`import Hover from 'Generic/Hover'
render () {
  const style = { background: '#f16a6a', hover: { background: '#72f16a' } }
  return <Hover style={style}>Hello</Hover>
}`}
        demoComponent={<Hover style={style}>Hello</Hover>}
      />
    )
  }
}

class CardShowcase extends Component {
  render () {
    return (
      <DemoCard
        title={'Generic/Card'}
        description={'This card but without content.'}
        demoCode={`import Card from 'Generic/Card'
render () {
  return <Card title='Hello World'>Card content goes here.</Card>
}`}
      />
    )
  }
}

export default Connector(UIShowcase, [])
