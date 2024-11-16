import React, { createContext, useContext, useState} from "react";

const FavoritedContext = createContext()

const FavoritedProvider = ({children}) => {
    const [favoritedJobPosts, setFavoritedJobPosts] = useState([])

    const actions = {
        addFavorite: (job) => {
            setFavoritedJobPosts(prev => [...favoritedJobPosts, job])
            console.log("ADD FAVORITE - job to add: ", job);
            console.log("ADD FAVORITE - current state: ", favoritedJobPosts);
        },

        removeFavorite: (job) => {
            setFavoritedJobPosts(previousList => previousList.filter(post => post.id !== job.id))
        }
    }

    return (
        <FavoritedContext.Provider value={{favoritedJobPosts, actions}}>{children}</FavoritedContext.Provider>
    )
}

const useFavorited = () => {
    return useContext(FavoritedContext)
}

export { FavoritedProvider, useFavorited}