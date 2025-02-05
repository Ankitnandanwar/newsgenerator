import axios from 'axios'
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSucces = (news) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: news
    }
}


export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


export const fetchApiNews = () => {
    return dispatch => {
        dispatch(fetchUserRequest())

        const newsApiUrl = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=73a086982df64763890c1146b4d05f2b"
        const guardianApiUrl = "https://content.guardianapis.com/search?api-key=23f1050c-7d3c-49ac-b1f5-d4e1543df724"

        Promise.all([
            axios.get(newsApiUrl),
            axios.get(guardianApiUrl)
        ])
            .then(([newsResponse, guardianResponse]) => {
                const newsArticles = newsResponse.data.articles.map(article => ({
                    image: article.urlToImage,
                    title: article.title,
                    description: article.description,
                    category: "",
                    source: "BBC",
                    author: article.author,
                    published: article.publishedAt,
                    url: article.url
                }))

                const guardianArticles = guardianResponse.data.response.results.map(article => ({
                    image: "",
                    title: article.webTitle,
                    description: article.webTitle,
                    category: article.pillarName,
                    source: "Guardian",
                    author: "",
                    published: article.webPublicationDate,
                    url: article.webUrl
                }))

                const allArticles = [...newsArticles, ...guardianArticles]
                dispatch(fetchUserSucces(allArticles))
            })



            // axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=73a086982df64763890c1146b4d05f2b')
            // .then(response=>{
            //     const users = response.data.articles
            //     dispatch(fetchUserSucces(users))
            // })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchUserFailure(errMsg))
            })
    }
}