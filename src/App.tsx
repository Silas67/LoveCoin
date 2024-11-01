import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mine from './pages/mine'
import Earn from './pages/earn'
import Friends from './pages/friends'
import Airdrop from './pages/airdrop'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Mine/>} />
        <Route path='/earn' element = {<Earn/>} />
        <Route path='/friends' element = {<Friends/>} />
        <Route path='/airdrop' element = {<Airdrop/>} />
      </Routes>
    </Router>
  )
}

export default App