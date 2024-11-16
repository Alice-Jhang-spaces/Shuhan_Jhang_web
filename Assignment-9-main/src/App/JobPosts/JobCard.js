import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorited } from '../../Utilities/favoriteProvider';
import { companyList } from '../../Utilities/siteData';
import { Link } from 'react-router-dom';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function JobCard({jobName, jobDescription, link, jobPost, handleAddFavoriteClick, handleRemoveFavoriteClick, favorited}) {
 
  const company = companyList.find(company => company.id === jobPost.id)
  return (
    <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Job Title
        </Typography>
        <Typography variant="h5" component="div">
          {jobName}
        </Typography>
        <Typography variant="subtitle" component={Link} to={`/company-showcase-details/${company?.id}`} state={{currentCompanyData: company}}>
          {company?.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mt:2, mb: 1 }}>Job Description</Typography>
        <Typography variant="body2">
          {jobDescription}
        </Typography>
      </CardContent>
      <CardContent>
        <Box>Required Skills: {jobPost.requiredSkills.map(skill => <p style={{display: 'inline-block', marginRight: 8}}>{skill}</p>)}</Box>
        <Box sx={{fontWeight: 500}}>Salary: {jobPost.salary}</Box>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button size="small" href={link}>APPLY NOW</Button>
        {
          favorited ? <FavoriteIcon onClick={() => handleRemoveFavoriteClick(jobPost)}/> : <FavoriteBorderIcon onClick={() => handleAddFavoriteClick(jobPost)}/>
        }
        
      </CardActions>
    </Card>
  );
}
