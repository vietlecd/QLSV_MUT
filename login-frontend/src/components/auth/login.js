import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Assuming useAuth hook exists
import Alert from '@mui/material/Alert'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        // Gọi hàm auth.login() và chờ phản hồi
        const response = await auth.login(email, password);
        console.log("response data: ", response);
        if (response.message === "Login successful") {
          setErrorMsg(null);
          setSuccessMsg("Login successful!");
          navigate('/student/dashboard');
        } else {
          setErrorMsg(response.message);
          setSuccessMsg(null);
        }
    } catch (error) {
        // Xử lý các lỗi xảy ra trong quá trình gọi auth.login()
        setErrorMsg(error?.message || "Error");
        console.error('Login error:', error.message);
    }
};

  const handleClickChange = () => {
    props.handleViewChange('Register');
  };

  return (
    <div className='login' style={{marginTop: '5vh'}}>
    {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
    {successMsg && <Alert severity="success">{successMsg}</Alert>}
      <form className='was-validated' onSubmit={handleLogin}>
        <label htmlFor="email">
          <input
            className="form-control"
            style={{ width: '40vh', height: '6vh'}} // Use object style syntax for consistency
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email" // Add ID for proper label association
            required
          />
          <div className="valid-feedback">Valid</div>
          <div className="invalid-feedback">Please fill this field</div>
        </label>
        <label htmlFor="password">
          <input
            className="form-control"
            style={{ width: '40vh', height: '6vh'}} // Use object style syntax for consistency
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password" // Add ID for proper label association
            required
          />
          <div className="valid-feedback">Valid</div>
          <div className="invalid-feedback">Please fill this field</div>
        </label>
        <button style={{padding: '5%', width: '20vh', fontWeight: 'bold', color: 'bisque', margin: '2vh'}} className="btn btn-block bg-primary" type="submit" id="login">
          Login
        </button>
      </form>
      <p>or doesn't have an account?</p>
      <button
        className="btn btn-block bg-success" style={{padding: '5%', width: '30vh', fontWeight: 'bold', color: 'bisque', margin: '2vh'}} onClick={handleClickChange}
      >
        Register
      </button>
    </div>
  );
}

export default Login;

