import React, { Component } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const defaultRouteStyle = `
  .route {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-transition: opacity 250ms ease-out, transform 250ms ease-out;
    -moz-transition: none;
    background: #fff; }

  .route-enter {
    opacity: 0;
    z-index: 2;
    transform: scale(1.25); }

  .route-enter.route-enter-active {
    opacity: 1;
    transform: scale(1);
    -webkit-transition: opacity 250ms ease-out, transform 250ms ease-out;
    -moz-transition: none; }

  .route-exit {
    opacity: 1;
    z-index: 1;
    transform: scale(1); }

  .route-exit.route-exit-active {
    opacity: 0;
    transform: scale(0.9);
    -webkit-transition: opacity 250ms ease-in, transform 250ms ease-in;
    -moz-transition: none; }
`

class AnimatedRouter extends Component {
  componentWillMount () {
  }
  render () {
    console.log(this.props.children)
    return (
      <div>
        <style>{this.props.routerStyle || defaultRouteStyle}</style>
        <Router>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                {this.props.statics && this.props.statics.map(child => <Route component={child} />)}
                <CSSTransition
                  key={location.key}
                  classNames='route'
                  timeout={250}
                >
                  <Switch location={location}>
                    {this.props.routes.map(route => <Route
                      exact={route.exact === true}
                      path={route.path || '/'}
                      component={route.component || <div />}
                    />)}
                    <Route render={() => (this.props.notfound || <div className='route'><Link to='/'>Go Home</Link></div>)} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </div>
    )
  }
}

export default AnimatedRouter
