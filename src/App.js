import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from './Body';
import Book from './Book';
import Theatre from './Theatre';
import Confirmation from './Confirmation';
import Final from './Final';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/bookings/:id/:image/:date/:overview"
            element={<Book />}
          />
          <Route path="/Theatre/:mall/:image/:name" element={<Theatre />} />
          <Route
            path="/Confirmation/:name/:selected/:id/:image/:price"
            element={<Confirmation />}
          />
          <Route path="/Final/:id/:image/:selected/:total/:name" element={<Final />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
