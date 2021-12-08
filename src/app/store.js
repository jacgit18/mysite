import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';


const logger = createLogger();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
},);
