import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MainContent from '../../components/mainContent/MainContent';
import Sidenav from '../../components/sidenav/Sidenav';

const Home = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Sidenav />
        <MainContent />
      </div>
    </BrowserRouter>
  )
}

export default Home;