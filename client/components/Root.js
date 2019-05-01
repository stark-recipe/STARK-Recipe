import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthPage from '../containers/AuthPage.jsx';
import MainContainer from '../containers/MainContainer.jsx';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/test" component={AuthPage} />
      <Route exact path="/" component={MainContainer} />
    </Router>
  </Provider>
)


Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root
