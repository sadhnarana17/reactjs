import React from 'react'
import { render } from 'react-dom'
import { PasswordStrength } from './components/PasswordStrength'
window.React = React 

render(
  <PasswordStrength/>, document.getElementById('app')
)