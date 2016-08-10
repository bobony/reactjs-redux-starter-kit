import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import reducers from './reducers'
import Home from './components/home/Home'
import NotFound from './components/misc/NotFound'
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
