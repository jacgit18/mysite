import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux'; 


const logger = createLogger();
const rootReducers = combineReducers({counter: counterReducer})

export const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)

);


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   middleware: [ logger],

// },);