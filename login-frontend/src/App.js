import React, { useState } from 'react';
import { AuthProvider } from './context/authContext';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  const[currentView, setCurrentView] = useState('Login');
  const handleViewChange = (newView) => {
    setCurrentView(newView);
  }
  return (
    <AuthProvider>      
      <div className="App">
        <h1>Welcome</h1>
        { currentView === 'Login' ? (
          <div>
            <Login handleViewChange = {handleViewChange}/>
          </div>
        ) : (
          <div>
            <Register handleViewChange = {handleViewChange}/>
          </div>
        )
        }
      </div>
    </AuthProvider>
  );
}

export default App;
