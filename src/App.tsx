import Acceuil from './components/acceuil'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Formulaire from './components/formulaire'
import Connexion from './components/connexion'
import { useState } from 'react'
import Francais from './lang/fr.json'
import Anglais from './lang/en.json'
import { FormattedMessage, IntlProvider} from 'react-intl'
import { IconButton } from '@mui/material'
import GTranslateIcon from '@mui/icons-material/GTranslate';





function App() {
  const [locale, setLocale] = useState("fr");
  const [messages, setMessages] = useState(Francais);
  const translation = () => {
    if(locale === "fr"){
      setLocale("en");
      setMessages(Anglais);
    } else {
      setLocale("fr")
      setMessages(Francais);
    }
  };

  return (
    <>
    <IntlProvider locale={locale} messages={messages}>
    <FormattedMessage id="app.translation">{txt => <IconButton color="inherit" onClick={translation} sx={{padding:5}}> {txt}<GTranslateIcon fontSize='large'/></IconButton>}</FormattedMessage>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Connexion/>}/>
            <Route path="/acceuil" element={<Acceuil/>}/>
            <Route path='/formulaire' element={<Formulaire/>}/>
            <Route path='/formulaire/:nom' element={<Formulaire/>}/>
            <Route path='/connexion' element={<Connexion/>}/>     
        </Routes>
      </BrowserRouter>
    </IntlProvider>
    </>
  )
}

export default App
