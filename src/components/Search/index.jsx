import { useState, useEffect, useContext } from 'react';

import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';

import tmdbApi from '../../api/tmdbApi';

import { OpenSearch, Container, Content, Input } from './styled';

import mglass from "../../assets/search.svg";
import mglassActive from '../../assets/searchActive.svg';
import SearchMovieCard from '../SearchMovieCard';

import { MoviesContext } from '../../contexts/MoviesContext';




const Search = () => {

  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState('');

  const { setOpenMenu, openSearchBar, setOpenSearchBar } = useContext(MoviesContext);


  const getList = async () => {
    let response = null;
    const params = {
      query: keyword
    }

    response = await tmdbApi.search({ params });
    setItems(response.results);
  }

  useEffect(() => {
    getList();
  }, [keyword]);


  return (
    <Container>
      <OpenSearch
        onClick={() => { setOpenSearchBar(!openSearchBar); setOpenMenu(false) }}
      >
        {
          openSearchBar ?
            <img src={mglassActive} alt="Search" /> :
            <img src={mglass} alt="Search" />
        }
      </OpenSearch>
      <Content open={openSearchBar}>
        <Input
          type='text'
          placeholder='Type your movie...'
          value={keyword}
          onChange={(elem) => setKeyword(elem.target.value)}
        />
        <Swiper
          modules={[Autoplay, Scrollbar]}
          autoplay={{ delay: 4000, disableOnInteraction: false, }}
          grabCursor={true}
          scrollbar={{ draggable: true, dragSize: 50 }}
          breakpoints={{
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            641: {
              spaceBetween: 150,
              slidesPerView: 3,
            },
            1025: {
              spaceBetween: 250,
              slidesPerView: 4
            }
          }}
        >
          {
            items.map((item, i) => (
              <SwiperSlide
                key={i}
                onClick={() => setOpenSearchBar(!openSearchBar)}
              >
                <SearchMovieCard
                  movieInfo={item}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Content>
    </Container>
  );
};

export default Search;