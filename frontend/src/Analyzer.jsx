import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Analyzer = () => {
    const [youtubeLink, setYoutubeLink] = useState('');

    const handleAnalyzeClick = () => {
        console.log('YouTube Link:', youtubeLink);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                // padding: '20px',
                // backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                margin: '50px auto',
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                Please enter a YouTube video link below:
            </Typography>
            <TextField
                label="Enter YouTube Link"
                variant="outlined"
                fullWidth
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                sx={{ marginBottom: '20px' ,maxWidth: '500px'}}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAnalyzeClick}
            >
                Analyze
            </Button>
        </Box>
    );
};

export default Analyzer;
