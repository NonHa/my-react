import React from 'react'
import App from './components/App'
import SignupPage from './components/signup/signupPage'
import { Route } from 'react-router-dom'

export default (
    <div className="container">
        <Route exact path="/" component={ App }></Route>
        <Route path="/signup" component={ SignupPage }></Route>
    </div>
) 