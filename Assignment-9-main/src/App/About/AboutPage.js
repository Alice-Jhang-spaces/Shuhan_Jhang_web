import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
    return (
        
        <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              Welcome to our Job Portal! We aim to bridge the gap between job seekers and leading companies, 
              providing a platform for professionals to explore exciting career opportunities.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              Our mission is to connect talented individuals with top-tier organizations, enabling them to 
              grow and thrive in their respective careers. With a focus on technology, innovation, and user 
              experience, we make the job search process seamless and effective.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              This portal also features company showcases, allowing job seekers to explore company profiles, 
              images, and their job openings to make informed decisions.
            </Typography>
          </CardContent>
        </Card>
      );
}

export default AboutPage