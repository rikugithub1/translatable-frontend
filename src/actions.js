export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});
