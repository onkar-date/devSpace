import { Routes, Route, Navigate } from 'react-router-dom';
import BoxShadowGenerator from '../boxShadow/BoxShadowGenerator';
import ImageGenerator from '../imageGenerator/ImageGenerator';
import { FaBars } from "react-icons/fa";
import './mainContent.scss';
const MainContent = () => {
  const toggleSidenav = () => {
    document.getElementById('sidenav')?.classList.toggle('active');
    document.getElementById('mainContent')?.classList.toggle('active');
  }
  return (
    <div className='main-content' id='mainContent'>
      <div className="container-fluid shadow px-4 toggle-section">
        <div className="row">
          <div className="col-12">
            <div>
              <FaBars className='me-3' size={'25px'} onClick={toggleSidenav} color="primary" type='button' />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 pt-4">
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route path='' element={<Navigate to={'image-generator'} />}></Route>
              <Route path='image-generator' element={<ImageGenerator />}></Route>
              <Route path='box-shadow-generator' element={<BoxShadowGenerator />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent