import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Assuming useAuth hook exists
import Alert from '@mui/material/Alert'

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const auth = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        // Gọi hàm auth.login() và chờ phản hồi
        const response = await auth.login(email, password);
        
        // Kiểm tra nếu phản hồi là hợp lệ
        if (response) {
            // Kiểm tra nếu phản hồi có mã trạng thái OK (200)
            if (response.status === 200) {
                // Chuyển đổi dữ liệu từ phản hồi thành đối tượng JavaScript
                const data = await response.json();
                console.log(data); // In ra dữ liệu nhận được từ phản hồi
            } else {
                // Nếu phản hồi có mã trạng thái không hợp lệ, in ra lỗi
                console.error('Đã xảy ra lỗi:', response.status);
            }
        } else {
            // Nếu không nhận được phản hồi từ auth.login(), in ra lỗi
            console.error('Không nhận được phản hồi từ auth.login()');
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

