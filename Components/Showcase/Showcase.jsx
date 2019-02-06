import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Connector } from 'Diluter'

import { Hover, Image, ParticleField, Tiltable } from 'Sparkle'

import * as styles from './styles'
import * as sstyles from '../styles'

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
          <ImageShowcase />
          <AnimatedRouterShowcase />
          <ParticleFieldShowcase />
          <TiltableShowcase />
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

class ImageShowcase extends Component {
  constructor (props) {
    super(props)
    this.state = { load: false }

    this.load = this.load.bind(this)
  }

  load () {
    this.setState({ load: true })
  }

  render () {
    return (
      <DemoCard
        title={'Image'}
        description={'Displays a low-res thumbnail while loading the full image.'}
        demoComponent={<div style={{ display: 'flex' }} onClick={this.load}>
          <Image
            src={this.state.load && `https://mobooru.ams3.cdn.digitaloceanspaces.com/samples/79/c2/79c23a6728d396f45004818c581364d4.jpg`}
            thumbnail={`https://mobooru.ams3.digitaloceanspaces.com/thumbnails/79/c2/79c23a6728d396f45004818c581364d4.jpg`}
            blur={12}
            scaleIn={1.2}
            transitionSpeed={400}
            style={{ height: 150, width: 150, borderRadius: 6, cursor: 'pointer', ...sstyles.shadow.deep }}
          >
            <p style={{ zIndex: 10, textAlign: 'center', position: 'relative', lineHeight: '150px', margin: 0, color: `rgba(0,0,0,${this.state.load ? 0 : 0.66})` }}>Click to load</p>
          </Image>
        </div>}
        demoCode={`import { Image } from 'Sparkle'
render () {
  return <Image
    src={'https://mobooru.ams3.cdn.digitaloceanspaces.com/samples/79/c2/79c23a6728d396f45004818c581364d4.jpg'}
    thumbnail={'https://mobooru.ams3.digitaloceanspaces.com/thumbnails/79/c2/79c23a6728d396f45004818c581364d4.jpg'}
    blur={12}
    scaleIn={1.2}
    transitionSpeed={400}
    style={{ height: 150, width: 150, borderRadius: 6 }}
  />
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

class ParticleFieldShowcase extends Component {
  render () {
    return (
      <DemoCard
        title={'ParticleField'}
        description={'React router + React transition group.'}
        demoComponent={<ParticleField background={'#161617'} height={200} fps={24} style={{ borderRadius: 6 }} />}
        demoCode={`import { ParticleField } from 'Sparkle'
render () {
  return <ParticleField background={'#161617'} height={200} fps={24} />
}`}
      />
    )
  }
}

class TiltableShowcase extends Component {
  render () {
    return (
      <DemoCard
        title={'Tiltable'}
        description={'Follows your mouse.'}
        demoComponent={<Tiltable style={{ height: 150, width: 150 }} itemStyle={{ borderRadius: 6, overflow: 'hidden' }}><ParticleField background={'linear-gradient(to right top, rgb(120, 70, 234), rgb(36, 135, 248)) rgb(81, 100, 240)'} color={'rgba(255,255,255,0.33)'} chance={2000} height={150} width={150} /></Tiltable>}
        demoCode={`import { Tiltable, ParticleField } from 'Sparkle'
render () {
  return <Tiltable style={{ height: 150, width: 150 }} itemStyle={{ borderRadius: 6, overflow: 'hidden' }}>
    <ParticleField background={'#161617'} chance={1000} height={150} width={150} />
  </Tiltable>
}`}
      />
    )
  }
}

export default Connector(UIShowcase, [])
