import axios from 'axios';
export const FETCH_CHAR_LOADING = 'FETCH_CHAR_LOADING';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_CHAR_FAILURE';

export const SAVE_CHAR = 'SAVE_CHAR';
export const SAVE_CHAR_FAIL = 'SAVE_CHAR_FAIL';
export const DELETE_CHAR = 'DELETE_CHAR';

export const getCharacter = () => (dispatch) => {
  dispatch({ type: FETCH_CHAR_LOADING });
  let id = Math.floor(Math.random() * 2139);

  axios
    .get(`https://www.anapioficeandfire.com/api/characters/${id}`)
    .then((res) => {
      console.log(id);
      dispatch({ type: FETCH_CHAR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CHAR_FAILURE, payload: err.message });
    });
};

export const saveChar = (character) => {
  return { type: SAVE_CHAR, payload: character };
};

export const deleteChar = (character) => {
  return { type: DELETE_CHAR, payload: character };
};

export const SaveCharFail = () => {
  return { type: SAVE_CHAR_FAIL, payload: 'Character already exists in Store' };
};
