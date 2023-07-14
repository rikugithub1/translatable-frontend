import { combineReducers } from 'redux';
import { CHANGE_LANGUAGE, SET_MESSAGES } from './actions';

const languageReducer = (state = 'en', action) => {
  if (action.type === CHANGE_LANGUAGE) {
    return action.payload;
  }
  return state;
};

const messagesReducer = (state = {}, action) => {
  if (action.type === SET_MESSAGES) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  language: languageReducer,
  messages: messagesReducer,
});

export default rootReducer;
