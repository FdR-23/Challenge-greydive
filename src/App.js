

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './components/Error.jsx';
import Clients from './components/Clients.jsx'
import Home from './components/Home.jsx'

import Navbar from './components/Navbar.jsx';


function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Clients />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

  );
}

export default App;
