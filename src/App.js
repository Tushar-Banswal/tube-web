import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Video, SearchFeed, Channel, Feed, Navbar } from './components';
import ScrollToTop from './components/ScrollToTop/ScollToTop';
import './styles.css';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
        <Routes >
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/channel/:id' element={<Channel />} />
          <Route path='/search/:query' element={<SearchFeed />} />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
