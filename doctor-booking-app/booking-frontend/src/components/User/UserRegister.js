import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/register', {
        name,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      navigate('/login'); // Navigate to login page
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={8}>
        <Typography variant="h4" gutterBottom>User Registeration</Typography>
        <TextField label="Full Name" variant="outlined" margin="normal" fullWidth required onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" variant="outlined" margin="normal" fullWidth required onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" variant="outlined" type="password" margin="normal" fullWidth required onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} onClick={handleRegister}>
          Register
        </Button>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
          Already have an account? <Link to="/userlogin">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default UserRegister;
