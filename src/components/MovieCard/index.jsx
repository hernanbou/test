import { Link } from 'react-router-dom';

import {
    Container,
    Poster,
    Title,
    Genres,
    Rate,
} from './styled';

import apiConfig from '../../api/apiConfig';
import star from '../../assets/star.svg'



export const MovieCard = ({ movieInfo }) => {

    const link = 'movie/' + movieInfo.id;

    return (
        <Container>
            <Link to={link}>
                <Poster>
                    <img src={apiConfig.w500Image(movieInfo.poster_path)} alt="" />
                </Poster>
            </Link>
            <Link to={link}>
                <Title>{movieInfo.title || movieInfo.name}</Title>
            </Link>
            <Genres>
                {
                    movieInfo.genres && movieInfo.genres.map((genres, i) => (
                        <span key={i}>{genres.name}</span>
                    ))
                }
            </Genres>
            <Rate>
                <img src={star} alt="" />
                <p>
                    {movieInfo.vote_average?.toFixed(1)}
                </p>
            </Rate>
        </Container>
    )
}
