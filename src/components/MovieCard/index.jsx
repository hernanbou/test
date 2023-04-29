import { Link } from 'react-router-dom';

import {
    Container,
    Poster,
    Title,
    Genres,
    Rate,
} from './styled';

import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';

import star from '../../assets/star.svg'

export const MovieCard = ({ movieInfo }) => {

    const getCategoryName = (categoryId) => {
        const categoryName = category.find(category => category.id === categoryId)
        return categoryName?.name || ""
    };

    const categoryName = (cateID) => {
        const cateName = cateID.map(getCategoryName)
        return cateName
    };

    const link = 'movie/' + movieInfo.id;


    return (
        <Container >
            <Link to={link}>
                <Poster >
                    <img src={apiConfig.w500Image(movieInfo.poster_path || movieInfo.backdrop_path)} alt="" />
                </Poster>
            </Link>
            <Link to={link}>
                <Title>{movieInfo.title || movieInfo.name}</Title>
            </Link>
            <Genres >
                {
                    categoryName(movieInfo.genre_ids).join(", ")
                }
            </Genres>
            <Rate >
                <img src={star} alt="pink star" />
                <p>
                    {movieInfo.vote_average?.toFixed(1)}
                </p>
            </Rate>
        </Container>
    )
}