import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

import App from "./App"

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    App: state.viewPages
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)