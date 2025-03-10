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
              <img className="App-Logo" src={Logo} href="/" alt="Netflix logo"/>
              <ul className='App-Navigation-List'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>TV Shows</a></li>
                <li><a href='/'>Movies</a></li>
                <li><a href='/'>New & Popular</a></li>
                <li><a href='/'>My List</a></li>
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