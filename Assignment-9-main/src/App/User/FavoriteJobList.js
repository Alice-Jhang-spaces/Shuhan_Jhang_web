import React, { useContext } from 'react';
import { useFavorited } from '../../Utilities/favoriteProvider';
import JobCard from '../JobPosts/JobCard'

const FavoriteJobList = () => {

    const { favoritedJobPosts, actions } = useFavorited();
    console.log("favorites job lists: ", favoritedJobPosts);

    const handleRemoveFavorite = (job) => {
        actions.removeFavorite(job)
    }
    
    return (
        <div>
            <h1>Favorited Jobs</h1>
    
            {
                favoritedJobPosts?.map(post => <JobCard  jobPost={post} jobName={post.title} jobDescription={post.description} handleRemoveFavoriteClick={handleRemoveFavorite} favorited/>)
            }
        </div>
    )
}

export default FavoriteJobList