import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import axios from 'axios';
import Comment from './Comment';

const Analyzer = () => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [result, setResult] = useState(null);

    const handleAnalyzeClick = () => {
        console.log('YouTube Link:', youtubeLink);

        axios.post('http://127.0.0.1:5000/analyze', { youtubeLink: youtubeLink })
        .then(response => {
          setResult(response.data); // Store the response from backend
        })
        .catch(error => {
          console.error("Error analyzing the YouTube link: ", error);
        });
    };

    const groupCommentsBySentiment = (comments) => {
        const positive = comments.filter(comment => comment.sentiment === "positive");
        const neutral = comments.filter(comment => comment.sentiment === "neutral");
        const negative = comments.filter(comment => comment.sentiment === "negative");

        return { positive, neutral, negative };
    };

    const groupedComments = result ? groupCommentsBySentiment(result.analyzed_comments) : null;

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
            {result && (
                <Grid container spacing={4} sx={{ marginTop: '20px', maxWidth: '1000px' }}>
                    <Grid item xs={4}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', textAlign:'left' , marginLeft:'10px'}}>
                            Positive Comments
                        </Typography>
                        {groupedComments.positive.map((row, index) => (
                            <Comment key={index} comment={row.comment} likes={row.num_of_likes} sentiment={row.sentiment} />
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', textAlign: 'left', marginLeft:'10px' }}>
                            Neutral Comments
                        </Typography>
                        {groupedComments.neutral.map((row, index) => (
                            <Comment key={index} comment={row.comment} likes={row.num_of_likes} sentiment={row.sentiment} />
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', textAlign: 'left' , marginLeft:'10px'}}>
                            Negative Comments
                        </Typography>
                        {groupedComments.negative.map((row, index) => (
                            <Comment key={index} comment={row.comment} likes={row.num_of_likes} sentiment={row.sentiment} />
                        ))}
                    </Grid>
                </Grid>
                )
                }
            {/* {result && (
                result.analyzed_comments.map((row, index) => (
                    <Comment key={index} comment={row.comment} likes={row.num_of_likes} sentiment={row.sentiment} />
                    // <p key={index}>{row.comment}</p>
                ))
            )} */}
            
        </Box>
    );
};

export default Analyzer;
