import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Connector from 'Connector'

import { Hover } from 'Sparkle'

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
          <AnimatedRouterShowcase />
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
        title={'Hover'}
        description={'Changes style on mouse enter / leave.'}
        demoCode={`import { Hover } from 'Sparkle'
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
        title={'Card'}
        description={'This card but without content.'}
        demoCode={`import { Card } from 'Sparkle'
render () {
  return <Card title='Hello World'>Card content goes here.</Card>
}`}
      />
    )
  }
}

class AnimatedRouterShowcase extends Component {
  render () {
    const style = { background: '#f2f2f2', padding: 12, borderRadius: 6, display: 'block', cursor: 'pointer', hover: { background: '#eee' } }
    return (
      <DemoCard
        title={'AnimatedRouter'}
        description={'React router + React transition group.'}
        demoComponent={<Link to='/'><Hover style={style}>Go home.</Hover></Link>}
        demoCode={`import { AnimatedRouter } from 'Sparkle'
render () {
  return <AnimatedRouter
    routes={[
      { path: '/', exact: true, component: <p>Home, <Link to='/outside'>Go outside.</Link></p> },
      { path: '/outside', component: <p>Not Home, <Link to='/'>Go home.</Link></p> }
    ]}
  />
}`}
      />
    )
  }
}

export default Connector(UIShowcase, [])
