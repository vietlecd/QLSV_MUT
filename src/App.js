import React from 'react';
import { AuthProvider } from './context/authContext';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Welcome to the Admin Panel</h1>
        <Login />
        <Register />
      </div>
    </AuthProvider>
  );
}

export default App;
