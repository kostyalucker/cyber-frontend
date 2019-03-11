import React, { Component } from 'react'
import { connect } from 'react-redux'

import View from './views'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="block">
        <View />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    objects: state.createObject
  }
}

export default connect(mapStateToProps)(App)
