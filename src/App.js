import React, { Component } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import { connect } from 'react-redux';
// import { counter } from './app/store'; // GET ACTION
// import { counterSlice } from './features/counter/counterSlice'; // GET ACTION



// parameter state comes from index.js provider store state(rootReducers)
// listens to state lets you get state from redux so can access from props
// const mapStateToProps = (state) => {
//   return {
//     incrementer: counterSlice.selectCount(state),
//     // decrement: state.increment.state,
//     // incrementByAmount: state.action.payload.incrementByAmount,
//     // extraReducers: builder.incrementAsync

//     // isPending: state.requestRobots.isPending
//   }
// }

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
// trigger change
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => dispatch(),
//     // onClick: () => dispatch(counterSlice.decrement())

//   }
// }

class App extends Component {
  // componentDidMount() {
  //   this.props.increment();
  // }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        
      </header>
    </div>
   );
}

}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is high order compononents meaning it returns another function
