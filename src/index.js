import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router' // browserHistory server need to support inorder to use it

import App from './components/App'
import reducers from './reducers'
import Home from './components/home/Home'
import NotFound from './components/misc/NotFound'
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
