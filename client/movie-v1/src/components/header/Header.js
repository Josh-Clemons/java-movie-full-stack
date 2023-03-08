import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


const pages = ['Products', 'Pricing', 'Blog', 'rando'];

const Header = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0E0D10' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
            <Box>
              <FontAwesomeIcon icon={faVideoSlash} color='gold'/>
              <Link component={Button} href="/" sx={{ color: 'white', ml: 2 }}>Home</Link>
              <Link component={Button} href="#" sx={{ color: 'white' }} >Watch List</Link>
            </Box>
            <Box>
              <Button sx={{color: 'white'}}>Login</Button>
              <Button sx={{color: 'white'}}>Register</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header