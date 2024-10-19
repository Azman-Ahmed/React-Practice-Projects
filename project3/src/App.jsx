import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiceFront from './DiceFront/DiceFront';
import Play from './Play/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiceFront />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
