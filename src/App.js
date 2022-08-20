import LangScreen from './language/langScreen'
import Menu from './menu/menu'
import Drink from './menu/drink'
import Food from './menu/food'
import Hookah from './menu/hookah'
import {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import { LanguageContext } from './LanguageContext'

function App() {
  const [language, setLanguage] = useState(1);

  return (
    <div>
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Routes>
          <Route path="/" element={ <LangScreen/> } />
          <Route path="menu" element={ <Menu/> } />
          <Route path="drinks" element={ <Drink/> } />
          <Route path="food" element={ <Food/> } />
          <Route path="hookah" element={ <Hookah/> } />
      </Routes>
    </LanguageContext.Provider>
    
    </div>
  );
}

export default App;
