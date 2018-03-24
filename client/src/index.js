import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import './style/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl';
import App from './components/App';
import { unregister } from './registerServiceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
unregister();
