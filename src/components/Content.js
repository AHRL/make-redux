import React from 'react'
import { ThemeContext } from '../context/Theme'
import ThemeSwitch from './ThemeSwitch'

function Content (props) {
  return (
    <div>
      <ThemeContext.Consumer>
        { store => <div>
          <p style={{ color: store.getState().themeColor }}>This is a test</p>
          <ThemeSwitch />
        </div> }
      </ThemeContext.Consumer>
    </div>
  )
}

export default Content
