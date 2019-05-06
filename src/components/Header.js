import React from 'react'

import { ThemeContext } from '../context/Theme'
function Header (props) {
  return (
    <ThemeContext.Consumer>
      { store => <h1 style={{ color: store.getState().themeColor }}>test</h1> }
    </ThemeContext.Consumer>
  )
}

export default Header
