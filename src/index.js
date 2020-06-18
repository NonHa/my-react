import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'

import rootReducers from './reduces'
import routers from './route'

import NavgetionBar from './components/navgationBar'
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)))
ReactDOM.render(
  <Provider store={ store }>
    <Router routers={routers}>
      <NavgetionBar/>
      { routers }
    </Router>
  </Provider>,
  document.getElementById('root')
);
