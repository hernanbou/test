import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Poster,
    Title,
    Genres,
    Rate,
    Info,
    Overview
} from './styled';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import star from '../../assets/star.svg'



export const CatalogMovieCard = ({ movieID }) => {

    const [movieInfo, setMovieInfo] = useState({});
    const link = 'movie/' + movieID;

    const getDetail = async () => {
        const response = await tmdbApi.detail(movieID, { params: {} });
        setMovieInfo(response)
    }

    useEffect(() => {
        getDetail();
    }, [])

    return (
        <Container >
            <Link to={link}>
                <Poster >
                    <img src={apiConfig.w500Image(movieInfo.poster_path)} alt="" />
                </Poster>
            </Link>
            <Info >
                <Link to={link}>
                    <Title>{movieInfo.title || movieInfo.name}</Title>
                </Link>
                <Genres >
                    {
                        movieInfo.genres && movieInfo.genres.map((genres, i) => (
                            <span key={i}>{genres.name}</span>
                        ))
                    }
                </Genres>
                <Rate >
                    <img src={star} alt="" />
                    <p>
                        {movieInfo.vote_average?.toFixed(1)}
                    </p>
                </Rate>
                <Overview >
                    <p>{movieInfo.overview}</p>
                </Overview>
            </Info>
        </Container>
    )
}
