import './App.scss';
import Home from './Pages/Home';
import MainFaq from './Pages/MainFaq';
import { HashRouter, Routes, Route } from 'react-router-dom';


import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/MainFaq" element={<MainFaq />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
      </HashRouter>
    </div>
  );
}

export default App;
