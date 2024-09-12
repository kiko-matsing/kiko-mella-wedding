import './App.scss';
import Home from './Pages/Home';
import MainFaq from './Pages/MainFaq';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/MainFaq" element={<MainFaq />} />
        </Routes>
      
    </div>
  );
}

export default App;
