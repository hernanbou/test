import axiosClient from './axiosClient';
import discoverConnection from './discoverConnection';
import apiConfig from './apiConfig';

const api_key = `api_key=${apiConfig.apiKey}`;

export const category = [
    {
        id: 12,
        name: "adventure",
        cateURL: '&with_genres=12'
    },
    {
        id: 14,
        name: "fantasy",
        cateURL: '&with_genres=14'
    },
    {
        id: 16,
        name: "animation",
        cateURL: '&with_genres=16'
    },
    {
        id: 18,
        name: "drama",
        cateURL: '&with_genres=18'
    },
    {
        id: 27,
        name: "horror",
        cateURL: '&with_genres=27'
    },
    {
        id: 28,
        name: "action",
        cateURL: '&with_genres=28'
    },
    {
        id: 35,
        name: "comedy",
        cateURL: '&with_genres=35'
    },
    {
        id: 53,
        name: "thriller",
        cateURL: '&with_genres=53'
    },
    {
        id: 80,
        name: "crime",
        cateURL: '&with_genres=80'
    },
    {
        id: 99,
        name: 'documentary',
        cateURL: '&with_genres=99'
    },
    {
        id: 878,
        name: "sci-fi",
        cateURL: '&with_genres=878'
    },
    {
        id: 9648,
        name: "mystery",
        cateURL: '&with_genres=9648'
    },
    {
        id: 10751,
        name: "family",
        cateURL: '&with_genres=10751'
    },
    {
        id: 10752,
        name: "war",
        cateURL: '&with_genres=10752'
    },
]

const tmdbApi = {
    getTrendingMovies: (params) => {
        const url = '/trending/movie/week';
        return axiosClient.get(url, params);
    },
    getMoviesList: (params) => {
        const url = 'movie/popular';
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