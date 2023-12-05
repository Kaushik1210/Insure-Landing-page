import React from 'react'
import './App.css';
import Header from './container/Header/Header';
import Midsection from './container/Midsection/Midsection';
import Footer from './container/Footer/Footer';

const App = () => {
  return (
    <html>
    <div className='layout'>
      
      <Header/>
      <Midsection/>
      <Footer/>
    </div>
    </html>
  )
}

export default App

