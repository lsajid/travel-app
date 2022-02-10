import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAllPlaces from './components/DisplayAllPlaces';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/places" element={<DisplayAllPlaces/>} />
      </Routes>
    </Router>
  );
}

export default App;
