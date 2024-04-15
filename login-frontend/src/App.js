import React, { useState } from 'react';
import { AuthProvider } from './context/authContext';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  const[clickbtn, setClickbtn] = useState('Login');
  const handleClickbtn = () => {
    // setClickbtn = true;
  }
  return (
    <AuthProvider>      
      <div className="App">
        <h1>SignIn Page</h1>
        { clickbtn ? (
          <div>
            <Register />
          </div>
        ) : (
          <div>
            <Login />
          </div>
        )
        }
      </div>
    </AuthProvider>
  );
}

export default App;
