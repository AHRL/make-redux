import React from 'react'
import { ThemeContext } from '../context/Theme'

function ThemeSwitch (props) {
  return (
    <ThemeContext.Consumer>
      { store => <div>
          <button style={{ color: store.getState().themeColor }} onClick={ () => store.dispatch({ type: 'CHANGE_COLOR', themeColor: 'red' }) }>Red</button>
          <button style={{ color: store.getState().themeColor }} onClick={ () => store.dispatch({ type: 'CHANGE_COLOR', themeColor: 'blue' }) }>Blue</button>
      </div> }
    </ThemeContext.Consumer>
  )
}

export default ThemeSwitch