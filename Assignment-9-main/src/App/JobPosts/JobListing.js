import JobCard from './JobCard'
import { Container } from '@mui/material';

import {jobPosts} from '../../Utilities/siteData'
import { useFavorited } from '../../Utilities/favoriteProvider';

function JobListing() {

  console.log("JOB LISTING");
  

  const { favoritedJobPosts, actions} = useFavorited();

  const handleAddFavorite = job => {
    actions.addFavorite(job)
  }

  const handleRemoveFavorite = job => {
    actions.removeFavorite(job)
  }

  const allPosts = jobPosts.map(job => {
    const isAlreadyFavorited = favoritedJobPosts.find(post => post.id === job.id);

    return <JobCard jobPost={job} jobName={job.title} jobDescription={job.description} handleAddFavoriteClick={handleAddFavorite} favorited={isAlreadyFavorited}/>
  })

  return (
    <div>
      
      <Container>
        <h1>Job Posts:</h1>

        <div>
          {allPosts}
        </div>
      </Container>
    </div>
  );
}

export default JobListing;
