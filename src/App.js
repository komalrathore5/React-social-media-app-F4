import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';
import InfoPage from './Components/InfoPage';
import { FaHome, FaRegBell, FaRegBookmark, FaUser } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <nav>
        
        <div className="nav-items">
          <h3>TravelMedia.in</h3>
          {/* <button> <FaHome/> <FaRegBell/> <FaRegBookmark/> < FaUser/> </button> */}
          <ul>
            <li> <FaHome/> </li>
            <li> <FaRegBell/> </li>
            <li> <FaRegBookmark/> </li>
            <li>  < FaUser/> </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
        <Route path="/item/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;