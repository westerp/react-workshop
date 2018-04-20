import * as actions from './actions';

export const reducer = (state = {}, action) => {
  switch (action.type){
    case actions.INCREMENT_COUNT:
      return {
        ...state,
        count: (state.count || 0) + 1
      };
  }

  return state;
};

export default reducer;