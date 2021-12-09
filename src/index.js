import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store'; // source of truth
import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { searchStuff } from './reducer';
import * as serviceWorker from './serviceWorker';
import './index.css';

// const logger = createLogger();
// const rootReducers = combineReducers({searchStuff});
// const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
