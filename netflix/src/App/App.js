import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Pages/Home/Home';
import Logo from '../Assets/logo.svg';

function App() {
  return (
      <Router>
        <div className="App">
          <div className="App-Navigation">
            <nav>
              <img className="App-Logo" src={Logo} alt=""/>
              <ul className='App-Navigation-List'>
                <li>Home</li>
              </ul>
            </nav>
          </div>
          <div className="Content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>  
    );
}

export default App;