import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import { ThemeContext } from './context/Theme'
import Content from './components/Content'
import store from './store/store'
import './index.css'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      store
    }
  }
  componentWillMount () {
    store.subscribe(this._updateTheme.bind(this))
  }
  _updateTheme () {
    this.setState({
      store: store.getState()
    })
  }
  render () {
    return (
      <div>
        <ThemeContext.Provider value={ store }>
          <Header />
          <Content />
        </ThemeContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
