import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';

// Comment Component
const Comment = ({ comment, likes , sentiment }) => {
    return (
        <Card variant="outlined" style={{ marginBottom: '16px', width:'70%' }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    Comment
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginTop: '8px' }}>
                    {comment}
                </Typography>
                <Divider style={{ margin: '16px 0' }} />
                <Typography variant="body2" color="text.secondary">
                    Likes: {likes}
                </Typography>
                <Divider style={{ margin: '16px 0' }} />
                <Typography variant="body2" color="text.secondary">
                    Sentiment: {sentiment}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;

