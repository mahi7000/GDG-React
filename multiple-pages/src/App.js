import { Route, Routes, useParams, Link, useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
  return <h2>Home Page</h2>;
};

const About = () => {
  return <h2>About Page</h2>;
};

const Contact = () => {
  return <h2>Contact Page</h2>;
};

const UserProfile = () => {
  const { username } = useParams();
  return <h2>User Profile: {username}</h2>;
};

const NotFound = () => {
  return <h2>404 - Page Not Found</h2>;
};

function App() {
  const history  = useNavigate();

  const navigateProfile = () => {
    history.push('/user/x');
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button onClick={navigateProfile}>Profile</button>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/user/:username' Component={UserProfile}/>
        <Route Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
