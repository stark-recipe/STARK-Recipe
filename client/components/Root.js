import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthPage from '../containers/AuthPage.jsx';
import SignupPage from '../containers/SignupPage.jsx';
import MainContainer from '../containers/MainContainer.jsx';
import { Switch } from 'react-router';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/maincontainer" component={MainContainer} />
      </Switch>
    </Router>
  </Provider>
)


Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root