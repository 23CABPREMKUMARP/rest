import { Button, styled, alpha } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: '#E91E63', // Pink text fill
  borderColor: alpha('#00FF00', 0.8), // Green border
  fontWeight: 600,
  textTransform: 'none',
  ':hover': {
    borderColor: '#00FF00', // Solid green border on hover
    backgroundColor: alpha('#00FF00', 0.04), // Slight green background on hover
  },
}));
