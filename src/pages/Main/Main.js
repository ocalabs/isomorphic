/**
 * @license MIT
 * @version 1.1.0
 * @author Trinca
 * @description User controller.
 */

import React from 'react'
import { connect } from 'react-redux'
import { F7App, View } from 'framework7-react'
import hello from 'hellojs'

import routes from '../../config/routes'
import config from '../../config'

import { watchKeyboardVisibility } from '../../actions/virtualKeyboard'

const f7params = {
  name: 'fretefacil',
  id: 'com.efforia.fretefacil',
  touch: { fastClicks: true },
  routes
}

class MobileMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.watchVirtualKeyboard()
  }

  render() {
    const { isKeyboardUp } = this.props
    return (
      <F7App
        params={f7params}
        colorTheme="orange"
        className={`${isKeyboardUp ? 'device-keyboard-visible' : ''}`}>
        <View main pushState pushStateSeparator="" />
      </F7App>
    )
  }
}

const mapStateToProps = state => ({
  isKeyboardUp: state.keyboard.isVisible
})

const mapDispatchToProps = dispatch => ({
  watchVirtualKeyboard: () => dispatch(watchKeyboardVisibility())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMain)
