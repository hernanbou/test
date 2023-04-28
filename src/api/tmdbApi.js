import axiosClient from './axiosClient';
import discoverConnection from './discoverConnection';
import apiConfig from './apiConfig';

const api_key = `api_key=${apiConfig.apiKey}`;

export const movieType = {
    popular: 'popular',
    top_rated: 'top_rated'
}

export const category = [
    {
        id: 12,
        name: "Adventure",
        cateURL: '&with_genres=12'
    },
    {
        id: 14,
        name: "Fantasy",
        cateURL: '&with_genres=14'
    },
    {
        id: 16,
        name: "Animation",
        cateURL: '&with_genres=16'
    },
    {
        id: 18,
        name: "Drama",
        cateURL: '&with_genres=18'
    },
    {
        id: 27,
        name: "Horror",
        cateURL: '&with_genres=27'
    },
    {
        id: 28,
        name: "Action",
        cateURL: '&with_genres=28'
    },
    {
        id: 35,
        name: "Comedy",
        cateURL: '&with_genres=35'
    },
    {
        id: 36,
        name: "History",
        cateURL: '&with_genres=36'
    },
    {
        id: 53,
        name: "Thriller",
        cateURL: '&with_genres=53'
    },
    {
        id: 80,
        name: "Crime",
        cateURL: '&with_genres=80'
    },
    {
        id: 99,
        name: "Documentary",
        cateURL: '&with_genres=99'
    },
    {
        id: 878,
        name: "Sci-Fi",
        cateURL: '&with_genres=878'
    },
    {
        id: 9648,
        name: "Mystery",
        cateURL: '&with_genres=9648'
    },
    {
        id: 10402,
        name: "Music",
        cateURL: '&with_genres=10402'
    },
    {
        id: 10751,
        name: "Family",
        cateURL: '&with_genres=10751'
    },
    {
        id: 10752,
        name: "War",
        cateURL: '&with_genres=10752'
    },
    {
        id: 10749,
        name: "Romance",
        cateURL: '&with_genres=10749'
    },
]

const tmdbApi = {
    getTrendingMovies: (params) => {
        const url = '/trending/movie/week';
        return axiosClient.get(url, params);
    },
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (id) => {
        const url = 'movie/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },
    getFilteredMovie: (type, params) => {
        const url = 'discover/movie?' + api_key + type;
        return discoverConnection.get(url, params);
    },
    search: (params) => {
        const url = 'search/movie';
        return axiosClient.get(url, params);
    },
    detail: (id, params) => {
        const url = 'movie/' + id;
        return axiosClient.get(url, params);
    },
    credits: (id) => {
        const url = 'movie/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    similar: (id) => {
        const url = 'movie/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
}

export default tmdbApi;