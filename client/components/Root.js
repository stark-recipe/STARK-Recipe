import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthPage from '../containers/AuthPage.jsx';
import { Switch } from 'react-router';

import SignupPage from '../containers/SignupPage.jsx';
import MainContainer from '../containers/MainContainer.jsx';
import SelectedCardDisplay from '../containers/SelectedCardDisplay.jsx'

const Root = ({ store }) => (

  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/maincontainer" component={MainContainer} />
        <Route path="/selectedcard" component={SelectedCardDisplay} />
      </Switch>
    </Router>
  </Provider>
)



Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root
