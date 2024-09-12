import './App.scss';
import Home from './Pages/Home';
import MainFaq from './Pages/MainFaq';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
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
