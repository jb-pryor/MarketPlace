import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Shop from './components/Shop'
import Header from './components/Header'
import Header2 from './components/Header2'

function App() {

  return (
    <>
      <Header></Header>
      <Header2></Header2>
      <Shop></Shop>
    </>
  )
}

export default App
