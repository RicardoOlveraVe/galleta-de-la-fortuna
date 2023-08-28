import React from 'react'
import phrases from './utils/phrases.json'
import Quote from './components/Quote'
import './App.css'
import BtnQuote from './components/BtnQuote'
import { useState } from 'react'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const bgRandom = getRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(bgRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.png)`
  }

  return (
   <div className='container' style={bgStyle}>
    <h1 className='container__title' >Galleta de la fortuna</h1>
    <Quote phrase={quote} />
    <BtnQuote
    setQuote = {setQuote}
    phrase = {phrases}
    setNumberBg = {setNumberBg}
    />
   </div>
  )
}

export default App
