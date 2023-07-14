import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, setMessages } from './actions';
import { messages } from './api/language.js';

const App = () => {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };

  useEffect(() => {
    // Dispatching the setMessages action with the messages object
    dispatch(setMessages(messages));
  }, [dispatch]);

  // Conditional rendering while fetching the messages data
  if (!messages[language]) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{messages[language].title}</h1>
      <p>{messages[language].description}</p>
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="jp">Japanese</option>
        </select>
      </div>
    </div>
  );
};

export default App;
