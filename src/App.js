import React from 'react';

import './App.css';
import { Navbar } from './components'
import { Header, Trending, Creators, Categories, HowItWorks, Discover, Joinus, Footer } from './containers'

const App = () => {

  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Trending />
        <Creators />
        <Categories />
        <Discover />
        <HowItWorks />
        <Joinus />
        <Footer />
    </div>
  )
}

export default App;