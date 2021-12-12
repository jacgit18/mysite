import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { fetchCount } from '../features/counter/counterAPI';

// import { createStore, applyMiddleware } from 'redux'; 


const logger = createLogger();

// const initialState = {
//   value: 0,
//   status: 'idle',
// };
// export const incrementAsync = thunkMiddleware(
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
// function counterReducer(state = { value: 0, status:'idle' }, action) {
//   switch (action.type) {
//     case 'counter/increment':
//       return { value: state.value + 1 }
//     case 'counter/decrement':
//       return { value: state.value - 1 }
//     case 'counter/incrementByAmount':
//       return { value: action.payload }
//       case 'counter/extraReducers':
//         return { status: 'loading' }
//         case 'counter/extraReducers2':
//           return { status: 'idle', value:action.payload  }
//     default:
//       return state
//   }
// }

const rootReducers = combineReducers({counter: counterReducer})

export const store = createStore(
  rootReducers, 
  // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(thunkMiddleware, logger)


);

// store.subscribe(() => console.log("hi ",store.getState()))



// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   middleware: [ logger],

// },);