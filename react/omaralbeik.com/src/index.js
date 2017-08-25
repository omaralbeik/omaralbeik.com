import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

import {BrowserRouter} from 'react-router-dom';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, reduxDevTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
