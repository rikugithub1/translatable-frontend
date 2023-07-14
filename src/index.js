// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';
import { setMessages } from './actions';

const store = createStore(rootReducer);

// Load language-specific messages based on the initial language
const initialLanguage = window.initialLanguage || 'en';
import(`./api/data/${initialLanguage}.json`).then((messages) => {
  store.dispatch(setMessages(messages.default));
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
