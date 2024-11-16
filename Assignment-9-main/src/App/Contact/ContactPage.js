import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactPage = () => {
    return (
        <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              We'd love to hear from you! Please feel free to reach out to us with any questions, feedback, or 
              support inquiries.
            </Typography>
            <>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => {}}
                sx={{ marginTop: '20px' }}
              >
                Send Message
              </Button>
            </>
            <Typography variant="body2" sx={{ marginTop: '20px', color: 'gray' }}>
              Alternatively, you can email us at support@jobportal.com or call us at +1-234-567-890.
            </Typography>
          </CardContent>
        </Card>
      );
}

export default ContactPage














