import React, { Component } from 'react'

import * as styles from './styles'

class ParticleField extends Component {
  constructor (props) {
    super(props)
    this.elements = []
    this.ctx = undefined
    this.canvas = undefined
    this.drawLoop = undefined
    this.resizeTimer = undefined

    this.resize = this.resize.bind(this)
    this.draw = this.draw.bind(this)
    this.gen = this.gen.bind(this)
  }
  componentDidMount () {
    this.canvas = this.refs.Canvas
    this.ctx = this.canvas.getContext('2d')
    this.resize()
    this.gen()

    window.addEventListener('resize', this.resize, { passive: true })

    this.drawLoop = setInterval(this.draw, 1000 / this.props.fps || 15)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.resize, { passive: true })
    clearInterval(this.drawLoop)
  }
  resize () {
    clearInterval(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      try {
        this.canvas.width = this.props.width || this.refs.Container.clientWidth
        this.canvas.height = this.props.height || this.refs.Container.clientHeight
        this.gen()
      } catch (e) {
        console.warn('Failed to regenerate canvas.')
      }
    }, 250)
  }
  async draw () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    var time = new Date().getTime()
    for (var e in this.elements) { this.elements[e].draw(this.ctx, time) }
  }
  gen () {
    this.elements = []
    for (var x = 0; x < this.canvas.width; x++) {
      for (var y = 0; y < this.canvas.height; y++) {
        if (Math.round(Math.random() * (this.props.chance || 4000)) === 0) {
          var s = ((Math.random() * 5) + 1) / 10
          switch (Math.round(Math.random() * 3)) {
            case 0:
              this.elements.push(this.o(x, y, s, 0, 0, this.props.color || '#97979c'))
              break
            case 1:
              this.elements.push(this.o(x, y, s, 0, 0, this.props.color || '#97979c'))
              break
            case 2:
              this.elements.push(this.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360), this.props.color || '#97979c'))
              break
            case 3:
              this.elements.push(this.dash(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360), this.props.color || '#97979c'))
              break
          }
        }
      }
    }
  }
  dash (x, y, s, dx, dy, dr, r, col) {
    r = r || 0
    return {
      x: x,
      y: y,
      s: 20 * s,
      w: 5 * s,
      r: r,
      dx: dx,
      dy: dy,
      dr: dr,
      draw: async function (ctx, t) {
        this.x += this.dx
        this.y += this.dy
        this.r += this.dr

        var _this = this
        var line = function (x, y, tx, ty, c, o) {
          o = o || 0
          ctx.beginPath()
          ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y))
          ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty))
          ctx.lineWidth = _this.w
          ctx.strokeStyle = c
          ctx.stroke()
        }

        ctx.save()

        ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2)
        ctx.rotate(this.r * Math.PI / 180)

        line(1, -1, -1, 1, col)

        ctx.restore()
      }
    }
  }
  x (x, y, s, dx, dy, dr, r, col) {
    r = r || 0
    return {
      x: x,
      y: y,
      s: 20 * s,
      w: 5 * s,
      r: r,
      dx: dx,
      dy: dy,
      dr: dr,
      draw: async function (ctx, t) {
        this.x += this.dx
        this.y += this.dy
        this.r += this.dr

        var _this = this
        var line = function (x, y, tx, ty, c, o) {
          o = o || 0
          ctx.beginPath()
          ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y))
          ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty))
          ctx.lineWidth = _this.w
          ctx.strokeStyle = c
          ctx.stroke()
        }

        ctx.save()

        ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2)
        ctx.rotate(this.r * Math.PI / 180)

        line(-1, -1, 1, 1, col)
        line(1, -1, -1, 1, col)

        ctx.restore()
      }
    }
  }
  o (x, y, s, dx, dy, col) {
    return {
      x: x,
      y: y,
      r: 12 * s,
      w: 5 * s,
      dx: dx,
      dy: dy,
      draw: async function (ctx, t) {
        this.x += this.dx
        this.y += this.dy

        ctx.beginPath()
        ctx.arc(this.x + +Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + +Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false)
        ctx.lineWidth = this.w
        ctx.strokeStyle = col
        ctx.stroke()
      }
    }
  }
  render () {
    return (
      <div
        style={{
          ...styles.particleField,
          ...(this.props.background && { background: this.props.background }),
          ...(this.props.height && { height: `${this.props.height}px` }),
          ...(this.props.width && { width: `${this.props.width}px` }),
          ...this.props.style }}
        ref='Container'
      >
        <canvas
          ref='Canvas'
          style={{ ...styles.particleField.canvas, ...this.props.canvasStyle }}
        />
      </div>
    )
  }
}

export default ParticleField
