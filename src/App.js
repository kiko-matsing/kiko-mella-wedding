import './App.scss';
import Home from './Pages/Home';
import MainFaq from './Pages/MainFaq';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/kiko-mella-wedding" element={<Home />} />
          <Route path="/kiko-mella-wedding/MainFaq" element={<MainFaq />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
