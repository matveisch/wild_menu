import LangScreen from './language/langScreen'
import Menu from './menu/menu'
import Drink from './menu/drink'
import Food from './menu/food'
import Hookah from './menu/hookah'
import {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import { LanguageContext } from './LanguageContext'
import { Layout } from './Layout'
import { MenuContext } from './MenuContext';

function App() {
  const [language, setLanguage] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
    <LanguageContext.Provider value={{language, setLanguage}}>
      <MenuContext.Provider value={{showMenu, setShowMenu}}>
        <Routes>
            <Route path="/" element={ <LangScreen/> } />
            <Route path="menu" element={ <Menu/> } />
            
              <Route path='/' element={<Layout/>} >
                <Route path="drinks" element={ <Drink/> } />
                <Route path="food" element={ <Food/> } />
                <Route path="hookah" element={ <Hookah/> } />
              </Route>
        </Routes>
      </MenuContext.Provider>
    </LanguageContext.Provider>
    
    </div>
  );
}

export default App;
