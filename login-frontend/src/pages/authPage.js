import React, { useState } from 'react';
import { AuthProvider } from '../context/authContext';
import Login from '../components/auth/login';
import Register from '../components/auth/register';

const authBG = "https://i.ibb.co/9YFh3Tn/lhuEjVn.jpg";
const logo = "https://i.ibb.co/CMwkBmw/lSgDz8N.png";

function App() {
  const [currentView, setCurrentView] = useState('Login');

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  return (
    <AuthProvider>
      <div
        className="container-fluid text-center"
        style={{
          margin: '0',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          webkitFontSmoothing: 'antialiased',
          mozOsxFontSmoothing: 'grayscale',
          backgroundImage: `url(${authBG})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="row">
          <div
            className="leftBody"
            style={{ width: '25%', height: '100vh', backgroundColor: 'rgb(62, 161, 168)' }}
          >
            <div className="App">
              <img className="img-thumbnail no-gutter" id="logo" alt="" src={logo} />
              <h1 style={{marginTop: '5vh'}}>Welcome</h1>
              {currentView === 'Login' ? (
                <Login handleViewChange={handleViewChange} /> // Pass prop as function reference
              ) : (
                <Register handleViewChange={handleViewChange} /> // Pass prop as function reference
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

