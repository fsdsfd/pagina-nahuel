import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Rutas from './routes/Rutas'
import Header from './components/Header'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

const App = () => {
  return (
    <BrowserRouter>

     <Header />

     <Rutas />
    <Whatsapp />
     <Footer />

    </BrowserRouter>
  )
}

export default App