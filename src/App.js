import React, { useState,useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import axios from 'axios';
import Nav from './components/Nav'
import Home from './routes/Home'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import CoinPage from './routes/CoinPage'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Footer from './components/Footer';
import { AuthContextProvider } from './context/Auth';

function App() {

  const [coins,setCoins]= useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data)
    })
  },[url])

  return <ThemeProvider>
    <AuthContextProvider>
      <Nav />
      <Router>
        <Route exact path='/'>
          <Home coins={coins}/>
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/account'>
          <Account />
        </Route>
        <Route path='/coin/:coinId'>
          <CoinPage /> 
          <Route path=':coinId' />
        </Route>
      </Router>
      <Footer />
    </AuthContextProvider>
  </ThemeProvider>
}

export default App;
