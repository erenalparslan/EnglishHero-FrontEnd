import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const turkishWord = data.get('turkishWord');
    const englishWord = data.get('englishWord');
  
    // API endpoint URL
    const url = 'http://localhost:6061/api/post';

    // Data to be sent in the POST request
    const postData = {
      user_id: 1, // Assuming user ID is 1, replace with actual user ID
      turkishWord: turkishWord, // Replace with actual data
      englishWord: englishWord // Replace with actual data
    };

    axios.post(url, postData)
      .then((response) => {
        console.log('Response:', response.data);
        // Clear form fields
        event.target.reset();
        // Handle successful response here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error here
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Word Add
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="englishWord"
              label="English Word"
              name="englishWord"
              autoComplete="englishWord"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="turkishWord"
              label="Turkish Word"
              type="text"
              id="turkishWord"
              autoComplete="turkishWord"
            />
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
