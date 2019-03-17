export const shadow = {
  border: '1px solid rgb(245, 245, 245)',
  hover: { border: '1px solid rgb(238, 238, 238)' },
  deep: {
    border: '1px solid rgb(238, 238, 238)',
    hover: {}
  },
  light: {
    border: '1px solid rgb(245, 245, 245)',
    hover: { border: '1px solid rgb(238, 238, 238)' }
  }
}

export const card = {
  padding: '12px 18px',
  maxWidth: 700,
  width: 'calc(100vw - 58px)',
  borderRadius: 12,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 24,
  title: {
    fontWeight: 300,
    margin: '6px 0px'
  }
}

export const image = {
  position: 'relative',
  overflow: 'hidden',
  image: (contain, blur, scaleIn, transitionSpeed) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    border: 'none',
    objectFit: contain ? 'contain' : 'cover',
    filter: blur > 0 && `blur(${blur}px)`,
    transform: scaleIn && `scale(${scaleIn}) translateZ(0px)`,
    willChange: 'opacity, filter, transform',
    transition: transitionSpeed > 0 ? `opacity ${transitionSpeed}ms, filter ${transitionSpeed}ms, transform ${transitionSpeed}ms` : 'none'
  }),
  loaded: {
    filter: `blur(0px)`,
    transform: `scale(1)`
  }
}

export const particleField = {
  height: '100%',
  width: '100%',
  position: 'relative',
  canvas: {
    position: 'absolute'
  }
}

export const tiltable = {
  container: {
    transform: 'perspective(600px)',
    transformStyle: 'preserve-3d'
  }
}

export const button = {
  flex: 1,
  border: '1px solid rgb(238, 238, 238)',
  margin: 0,
  padding: 12,
  borderRadius: 6,
  cursor: 'pointer',
  background: 'rgb(255,255,255)',
  color: 'rgb(0,0,10)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  transition: 'background 0.1s',
  hover: {
    background: 'rgb(240,240,240)'
  }
}

export const buttonPrimary = {
  background: 'linear-gradient(to right top, rgb(120, 70, 234), rgb(36, 135, 248)), rgb(36, 135, 248)',
  color: 'rgb(255, 255, 255)',
  transition: 'filter 0.1s',
  hover: {
    filter: 'brightness(1.1)'
  }
}

export const buttonDisabled = {
  opacity: 0.8,
  hover: { filter: 'none' }
}

export const modal = {
  padding: 24,
  background: '#ffffff',
  width: 'calc(100vw - 32px - 24px)',
  maxWidth: 380,
  borderRadius: 8
}

export const input = {
  display: 'block',
  padding: 12,
  borderRadius: 6,
  marginTop: 6,
  border: '1px solid #eee',
  width: 'calc(100% - 26px)'
}
