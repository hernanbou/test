import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import PinkButton from '../../components/PinkButton'
import star from '../../assets/star.svg'
import {
    Container,
    Main,
    Poster,
    Content,
    Info,
    Genres,
    Rate,
    Overview,
    Trailer,
    Header,
    Frame
} from "./styled"


const SingleMovie = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [video, setVideo] = useState([]);

    const trailerBaseUrl = "https://www.youtube.com/embed/"

    const getDetail = async () => {
        const response = await tmdbApi.detail(id, { params: {} });
        setItem(response);
        window.scrollTo(0, 0);
        console.log(response);
    }

    const getVideos = async () => {
        const response = await tmdbApi.getVideos(id);
        setVideo(response.results);
        console.log(response)
    }

    useEffect(() => {
        getDetail();
        getVideos();
    }, [id])


    return (
        <>
            {item && (
                <Container>
                    <Main>
                        <Poster src={apiConfig.w500Image(item.poster_path)} alt="" />
                        <Content>
                            <h2>{item.title || item.name}</h2>
                            <Info>
                                <Genres>
                                    {
                                        item.genres && item.genres.map((genres, i) => (
                                            <span key={i}>{genres.name}</span>
                                        ))
                                    }
                                </Genres>
                                <Rate>
                                    <img src={star} alt="" />
                                    <p>
                                        {item.vote_average?.toFixed(1)}
                                    </p>
                                </Rate>
                            </Info>
                            <Overview>
                                <h3>Sinopse</h3>
                                <p>{item.overview}</p>
                            </Overview>
                        </Content>
                    </Main>
                    <Trailer>
                        <Header>
                            <h3>Trailer</h3>
                        </Header>
                        <Frame src={trailerBaseUrl + (video.length ? video[0].key : '')} />
                        <PinkButton isCenter={true} text='voltar' />
                    </Trailer>
                </Container>
            )}
        </>
    )
}

export default SingleMovie;