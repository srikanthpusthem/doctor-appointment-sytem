// import React from 'react';
// import { TextField, Button, Typography, Container } from '@mui/material';
// import { Link } from 'react-router-dom';
// import backgroundImage from './image.png'; // Adjust the path if necessary

// const Register = () => {
//   return (
//     <div 
//       style={{
//         backgroundImage: `url(${backgroundImage})`, // Use the imported image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh', // Full viewport height
//         display: 'flex', // Use flexbox to center content
//         justifyContent: 'center', // Center horizontally
//         alignItems: 'center' // Center vertically
//       }}
//     >
//       <Container 
//         maxWidth="xs" 
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: add a white background with some transparency
//           borderRadius: '8px', // Optional: add rounding to the corners
//           padding: '20px' // Optional: add some padding
//         }}
//       >
//         <Typography variant="h4" gutterBottom>Doctor Booking - Register</Typography>
        

//         <TextField 
//           label="Full Name" 
//           variant="outlined" 
//           margin="normal" 
//           fullWidth 
//           required 
//         />
//         <TextField 
//           label="Email" 
//           variant="outlined" 
//           margin="normal" 
//           fullWidth 
//           required 
//         />
//         <TextField 
//           label="Password" 
//           variant="outlined" 
//           type="password" 
//           margin="normal" 
//           fullWidth 
//           required 
//         />
//         <TextField 
//           label="Confirm Password" 
//           variant="outlined" 
//           type="password" 
//           margin="normal" 
//           fullWidth 
//           required 
//         />
//         <Button 
//           variant="contained" 
//           color="primary" 
//           fullWidth 
//           style={{ marginTop: '20px' }}
//         >
//           Register
//         </Button>
//         <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
//           Already have an account? <Link to="/login">Login</Link>
//         </Typography>
//       </Container>
//     </div>
//   );
// };

// export default Register;
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
        <Typography variant="h4" gutterBottom>Doctor Booking - Register</Typography>
        <TextField label="Full Name" variant="outlined" margin="normal" fullWidth required onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" variant="outlined" margin="normal" fullWidth required onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" variant="outlined" type="password" margin="normal" fullWidth required onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} onClick={handleRegister}>
          Register
        </Button>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default UserRegister;
