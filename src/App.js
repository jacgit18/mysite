import React, { Component } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField } from './action';



// parameter state comes from index.js provider store state(rootReducers)
// listens to state
const mapStateToProps = (state) => {
  return {
    searchField: state.searchStuff.searchField,
    // isPending: state.requestRobots.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
// trigger change
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

class App extends Component {
  // componentDidMount() {
  //   this.props.setSearchField();
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
