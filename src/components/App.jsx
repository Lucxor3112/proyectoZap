import React from 'react'
import '../styles/Header.css'
import '../styles/Main.css'
import '../styles/App.css'
import '../styles/Footer.css'
import '../styles/Media.css'
import '../styles/Cards.css'
import Header from './Header'
import Main from './Main'
import Adidas from './Adidas'
import Converse from './Converse'
import Jordan from './Jordan'
import Vans from './Vans'
import Nike from './Nike'
import Lacoste from './Lacoste'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'

function App() 
{
  return (
    <>
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Routes>
          <Route path='/adidas' element={<Adidas />}></Route>
          <Route path='/converse' element={<Converse />}></Route>
          <Route path='/jordan' element={<Jordan />}></Route>
          <Route path='/vans' element={<Vans />}></Route>
          <Route path='/nike' element={<Nike />}></Route>
          <Route path='/lacoste' element={<Lacoste />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
