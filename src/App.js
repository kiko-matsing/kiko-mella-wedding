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
import Entourage from './Pages/Entourage';
import MainVenue from './Pages/Venue';
import Rsvp from './Pages/Rsvp';


import background from './Assets/prenup/final/momentum-339.jpg'

function App() {
  return (
    <div className="App">
      <img src={background} alt="background" className='background-main'/>
      <HashRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gifts" element={<MainGifts />} />
            <Route path="photo-book" element={<PhotoBook />} />
            <Route path="entourage" element={<Entourage />} />
            <Route path="venue" element={<MainVenue />} />
            <Route path="faq" element={<MainFaq />} />
            <Route path="rsvp" element={<Rsvp />} />
          </Route>
        </Routes>
        
        <Divider reels={15}/>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
