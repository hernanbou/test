import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { MoviesContext } from '../../contexts/MoviesContext'

import { Container, Poster, Info, Title, Genres, Rate } from './styled'
import star from '../../assets/star.svg'

import apiConfig from '../../api/apiConfig'

const SearchMovieCard = ({ movieInfo }) => {
  const { categoryName } = useContext(MoviesContext)

  const link = 'movie/' + movieInfo.id

  return (
    <Link to={link}>
      <Container>
        <Poster>
          <img
            src={apiConfig.w500Image(
              movieInfo.poster_path || movieInfo.backdrop_path,
            )}
            alt=""
          />
        </Poster>
        <Info>
          <Title>{movieInfo.title || movieInfo.name}</Title>
          <Genres>{categoryName(movieInfo.genre_ids).join(', ')}</Genres>
          <Rate>
            <img src={star} alt="pink star" />
            <p>{movieInfo.vote_average?.toFixed(1)}</p>
          </Rate>
        </Info>
      </Container>
    </Link>
  )
}

export default SearchMovieCard
