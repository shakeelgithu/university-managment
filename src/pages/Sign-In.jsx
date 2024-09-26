import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Styled components
const RegisterCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const RegisterContainer = styled(Stack)(({ theme }) => ({
  height: '100vh', // Ensure full viewport height
  padding: 4,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SigninPage() {
  const [mode, setMode] = React.useState('light');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [formError, setFormError] = React.useState(''); // For handling form errors

  const navigate = useNavigate(); // Hook for navigation

  const theme = createTheme({ palette: { mode } });

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateInputs()) {
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');

      // Check for registered users in local storage
      const registeredUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = registeredUsers.find(user => user.email === email);

      if (!user) {
        // User is not registered
        setFormError('Email is not registered. Please create an account.');
        return;
      }

      // Make an API call to verify the password
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
          // Assuming the response includes a token or user info
          localStorage.setItem('authToken', result.token); // Store token in localStorage if needed
          navigate('/home'); // Navigate to home page
        } else {
          // Handle invalid password or other errors
          setFormError(result.message || 'Login failed. Please check your credentials.');
        }
      } catch (error) {
        setFormError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RegisterContainer direction="column" justifyContent="center">
        <RegisterCard variant="outlined">
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                autoComplete="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                required
                fullWidth
                error={emailError}
                helperText={emailErrorMessage}
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                autoComplete="new-password"
                name="password"
                id="password"
                placeholder="••••••"
                type="password"
                required
                fullWidth
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            {formError && (
              <Typography color="error" sx={{ textAlign: 'center' }}>
                {formError}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign in
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Don’t have an account?{' '}
              <Link href="/" variant="body2">
                Sign up
              </Link>
            </Typography>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<span>G</span>} // Replace with your actual Google icon
            >
              Sign in with Google
            </Button>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<span>F</span>} // Replace with your actual Facebook icon
            >
              Sign in with Facebook
            </Button>
          </Box>
        </RegisterCard>
      </RegisterContainer>
    </ThemeProvider>
  );
}
