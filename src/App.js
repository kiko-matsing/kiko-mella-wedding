import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';


// import Layout
import Layout from './Pages/Layout';
import Footer from './Components/Footer';
import Divider from './Components/Divider';


// import pages
import Home from './Pages/Home';
import MainFaq from './Pages/MainFaq';
import MainGifts from './Pages/Gifts';
import PhotoBook from './Pages/PhotoBook';
import ThingsToDo from './Pages/ThingsToDo';
import Guests from './Pages/Guests';



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gifts" element={<MainGifts />} />
            <Route path="photo-book" element={<PhotoBook />} />
            <Route path="guests" element={<Guests />} />
            <Route path="things-to-do" element={<ThingsToDo />} />
            <Route path="faq" element={<MainFaq />} />
          </Route>
        </Routes>
      
      </HashRouter>
      <Divider reels={15}/>
      <Footer />
    </div>
  );
}

export default App;
