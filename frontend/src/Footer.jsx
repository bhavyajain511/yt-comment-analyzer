import React from 'react';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px 0',
                mt: 'auto',
                borderTop: '1px solid #444'
            }}
        >
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body2" align="center">
                    &copy; {new Date().getFullYear()} VibeCheck. All rights reserved.
                </Typography>
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <IconButton 
                        color="inherit" 
                        href="https://facebook.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mx: 1 }}
                    >
                        <Facebook />
                    </IconButton>
                    <IconButton 
                        color="inherit" 
                        href="https://twitter.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mx: 1 }}
                    >
                        <Twitter />
                    </IconButton>
                    <IconButton 
                        color="inherit" 
                        href="https://instagram.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mx: 1 }}
                    >
                        <Instagram />
                    </IconButton>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        Terms of Service
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
