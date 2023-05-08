const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '21fdc8e9b0a5e03203d77df373453e4f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;