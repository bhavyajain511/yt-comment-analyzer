import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FF8042']; // Blue for positive, green for neutral, orange for negative

const CustomPieChart = ({ data }) => {
    const chartData = [
        { name: 'Positive', value: data.positive.length },
        { name: 'Neutral', value: data.neutral.length },
        { name: 'Negative', value: data.negative.length }
    ];

    return (
        <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                Sentiment Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={chartData}
                        // cx="50%"
                        // cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default CustomPieChart;
