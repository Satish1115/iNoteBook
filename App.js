import './App.css';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          
          <div className="container">
            <Routes>
              {/* Use element prop instead of children */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
