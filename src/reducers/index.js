import {
  FETCH_CHAR_LOADING,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE,
} from '../actions';

const initialState = {
  charData: {},
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        charData: action.payload,
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
