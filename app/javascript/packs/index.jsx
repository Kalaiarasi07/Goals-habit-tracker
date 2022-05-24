import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Signup from '../components/Signup'



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
    // document.body.appendChild(document.createElement('div')),
  )
})
