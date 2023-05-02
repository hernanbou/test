import { useState, useEffect } from 'react';

import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';

import tmdbApi from '../../api/tmdbApi';

import { OpenSearch, Container, Content, Input } from './styled';

import mglass from "../../assets/search.svg";
import mglassActive from '../../assets/searchActive.svg';
import SearchMovieCard from '../SearchMovieCard';




const Search = () => {

  const [items, setItems] = useState([]);
  const [active, setActive] = useState(false);
  const [keyword, setKeyword] = useState('');


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
        onClick={() => setActive(!active)}
      >
        {
          active === true ?
            <img src={mglassActive} alt="Search" /> :
            <img src={mglass} alt="Search" />
        }
      </OpenSearch>
      <Content open={active}>
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
                onClick={() => setActive(!active)}
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