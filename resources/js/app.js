import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';

// Services
import axios from 'axios';

// Routing
import history from './utils/history';
import Routes from './routes';

// State management (for Redux)
import store from './store';

const createStoreWithMiddleware =
process.env.MIX_REACT_APP_DEBUG === 'true'
  ? applyMiddleware(promise, thunk, logger)(createStore)
  : applyMiddleware(promise, thunk)(createStore);

// Axios
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');
axios.defaults.baseURL = process.env.MIX_REACT_APP_API_HOST;

export default class BudgetMate extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(store)}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<BudgetMate />, document.getElementById('root'));
}
