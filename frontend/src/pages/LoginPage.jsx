/* eslint-disable no-unused-vars */
import {useState} from 'react';
import {useLogin} from '../hooks/useLogin';
import {useNavigate} from 'react-router-dom';
import "../styles/LoginPage.css";

 const LoginPage = ({setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  const {login, error, isLoading} = useLogin();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      <button>Login</button>
      {error && <div> {error} </div>}
    
    </form>
  );
};

export default LoginPage;