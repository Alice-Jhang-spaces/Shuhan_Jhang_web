import { Paper, Typography } from '@mui/material';
import React from 'react';

const CompanyInfoCard = ({someCompanyName}) => {
    return (
        <Paper elevation={5} sx={{marginBottom: 2, marginX: 2, maxWidth: 275, paddingX: 2}}>
            <Typography variant='overline'>{someCompanyName}</Typography>
        </Paper>
    )
}

export default CompanyInfoCard