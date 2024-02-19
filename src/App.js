
import React from 'react';
import { connect } from 'react-redux';
import { increment } from './redux/action';

const App = ({ count, increment }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Add</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
