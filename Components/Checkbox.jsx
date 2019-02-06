import React, { Component } from 'react'
const checkboxStyle = `
._sparkle_checkbox_container {
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 0px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 12px;
}

._sparkle_checkbox_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

._sparkle_checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 4px;
  background-color: #ddd;
  transition: all 0.1s;
}

._sparkle_checkbox_container:hover input ~ ._sparkle_checkbox {
  background-color: #ccc;
}

._sparkle_checkbox_container input:checked ~ ._sparkle_checkbox {
  background-color: #008dff;
}

._sparkle_checkbox:after {
  content: "";
  position: absolute;
  opacity: 0;
  transform: rotate(11deg) scale(0.25);
  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.46, 0.1, 0.18, 1.37);
}

._sparkle_checkbox_container input:checked ~ ._sparkle_checkbox:after {
  opacity: 1;
  transform: rotate(45deg) scale(0.75);
}

._sparkle_checkbox_container ._sparkle_checkbox:after {
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
}
`

class Checkbox extends Component {
  render () {
    return (
      <div>
        <style>
          {checkboxStyle}
        </style>
        <label className='_sparkle_checkbox_container' style={this.props.style}>
          {this.props.children}
          <input ref='input' type='checkbox' onChange={this.props.onChange || (() => {})} />
          <span className='_sparkle_checkbox' />
        </label>
      </div>
    )
  }
}

export default Checkbox
