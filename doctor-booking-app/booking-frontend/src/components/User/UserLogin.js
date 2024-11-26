import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      
      localStorage.setItem('token', response.data.token);
      navigate('/userdashboard'); // Navigate to a protected route
    } catch (error) {
      console.error('Error logging in:', error);
    }
    
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={8}>
        <Typography variant="h4" gutterBottom>User Login</Typography>
        <TextField label="Email" variant="outlined" margin="normal" fullWidth required onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" variant="outlined" type="password" margin="normal" fullWidth required onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} onClick={handleLogin}>
          Login
        </Button>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
          Don't have an account? <Link to="/userregister">Register</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default UserLogin;
