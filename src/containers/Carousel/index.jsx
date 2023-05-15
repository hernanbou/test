import { useCallback, useEffect, useState } from 'react'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { MoviesContext } from '../../contexts/MoviesContext'

import tmdbApi from '../../api/tmdbApi'
import { MovieCard } from '../../components/MovieCard'

import { Container, Content, Section, RButton, LButton } from './styled'

import dot from '../../assets/dot.svg'
import LArrow from '../../assets/l_arrow.svg'
import RArrow from '../../assets/r_arrow.svg'
import { useContext } from 'react'

const Carousel = () => {
  const [movieItems, setMovieItems] = useState([])
  const [swiperRef, setSwiperRef] = useState()

  const { setError } = useContext(MoviesContext)

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev()
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
  }, [swiperRef])

  const getMovies = async () => {
    const params = { page: 1 }
    try {
      const response = await tmdbApi.getTrendingMovies({ params })
      setMovieItems(response.results)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      <Content>
        <Section>
          <img src={dot} alt="" />
          <h2>
            <span>lançamentos</span> da semana
          </h2>
        </Section>
        <LButton onClick={handlePrevious}>
          <img src={LArrow} alt="" />
        </LButton>
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            641: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            1025: {
              spaceBetween: 50,
              slidesPerView: 4,
            },
          }}
        >
          {movieItems.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard movieInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <RButton onClick={handleNext}>
          <img src={RArrow} alt="" />
        </RButton>
      </Content>
    </Container>
  )
}

export default Carousel
