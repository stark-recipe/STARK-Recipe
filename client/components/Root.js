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
<<<<<<< HEAD
      <Route exact path="/test" component={AuthPage} />
      <Route exact path="/" component={MainContainer} />
=======
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/maincontainer" component={MainContainer} />
      </Switch>
>>>>>>> fa03b9caf23776adb083bad570014dd727d2dd24
    </Router>
  </Provider>
)


Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root
