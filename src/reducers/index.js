import {
  FETCH_CHAR_LOADING,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE,
  SAVE_CHAR,
  DELETE_CHAR_FAIL,
  DELETE_CHAR,
  SAVE_CHAR_FAIL,
} from '../actions';

const initialState = {
  charData: {},
  isLoading: false,
  error: '',
  savedChars: [],
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
    case SAVE_CHAR:
      return {
        ...state,
        savedChars: [...state.savedChars, action.payload],
      };
    case SAVE_CHAR_FAIL:
      return {
        ...state,
        error: 'Character already exists',
      };
    case DELETE_CHAR:
      return {
        ...state,
        savedChars: state.savedChars.filter((char) => char !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
