import { Link } from 'react-router-dom';

import {
    Container,
    Poster,
    Info,
    Title,
    Genres,
    Rate
} from './styled'
import star from '../../assets/star.svg'

import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';


const SearchMovieCard = ({ movieInfo }) => {

    const link = 'movie/' + movieInfo.id;

    const getCategoryName = (categoryId) => {
        const categoryName = category.find(category => category.id === categoryId)
        return categoryName?.name || ""
    };

    const categoryName = (cateID) => {
        const cateName = cateID.map(getCategoryName)
        return cateName
    };



    return (
        <Link to={link}>
            <Container>
                <Poster>
                    <img src={apiConfig.w500Image(movieInfo.poster_path || movieInfo.backdrop_path)} alt="" />
                </Poster>
                <Info>
                    <Title>{movieInfo.title || movieInfo.name}</Title>
                    <Genres>
                        {
                            categoryName(movieInfo.genre_ids).join(", ")
                        }
                    </Genres>
                    <Rate>
                        <img src={star} alt="pink star" />
                        <p>
                            {movieInfo.vote_average?.toFixed(1)}
                        </p>
                    </Rate>
                </Info>
            </Container>
        </Link>
    )
}

export default SearchMovieCard