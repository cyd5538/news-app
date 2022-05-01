import './App.css';
import Header from './components/Header'
import Business from './pages/Business'
import Home from './pages/Home'
import Health from './pages/Health'
import Entertainment from './pages/Entermainment'
import Science from './pages/Science'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<Business />} />
      <Route path="/health" element={<Health />} />
      <Route path="/entermainment" element={<Entertainment />} />
      <Route path="/science" element={<Science />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
    </div>
  );
}

export default App;
