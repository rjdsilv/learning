import React, { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const App = () => {
  const [language, setLanguage] = useState('english')

  const onLanguageChange = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className="ui container">
      <div>
        Select a language:&nbsp;
        <i className="flag us" onClick={() => onLanguageChange('english')} />
        <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  )
}

export default App
