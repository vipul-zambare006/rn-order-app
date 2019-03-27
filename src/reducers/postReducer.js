import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        count: action.payload.length
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
        count: state.count + 1
      };
    default:
      return state;
  }
}
