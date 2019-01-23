import React, { Component } from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles/hljs'

import Card from 'Generic/Card'

class DemoCard extends Component {
  render () {
    return (
      <Card title={this.props.title}>
        <p>{this.props.description}</p>
        <div>
          {this.props.demoComponent}
          <SyntaxHighlighter language='javascript' style={docco}>{this.props.demoCode}</SyntaxHighlighter>
        </div>
      </Card>
    )
  }
}

export default DemoCard
