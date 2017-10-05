// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './register-service-worker';

// Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

// App
import App from './app';

// Routing & Links
import {BrowserRouter} from 'react-router-dom';

// Redux dev tools
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Redux Store
const store = createStore(rootReducer, reduxDevTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
