import React from 'react';
import {connect} from 'react-redux';

import * as actions from './store/actions';

export const CounterButton = (props) => {
  const {count, onClick} = props;
  return (
    <button onClick={onClick}>Number of clicks {count}</button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count || 0
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      const action = actions.incrementCount();
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);