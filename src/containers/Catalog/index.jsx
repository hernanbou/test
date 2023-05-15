import { useContext, useEffect, useState } from 'react'

import { MoviesContext } from '../../contexts/MoviesContext'

import { CatalogMovieCard } from '../../components/CatalogMovieCard'
import PinkButton from '../../components/PinkButton'
import { windowResize } from '../../utils/windowResize'

import tmdbApi, { movieType, category } from '../../api/tmdbApi'

import {
  Container,
  Header,
  Content,
  ControlPanel,
  Display,
  Button,
  FilterCategory,
} from './styled'

import dot from '../../assets/dot.svg'
import DArrow from '../../assets/d_arrow.svg'

const Catalog = () => {
  const [display, setDisplay] = useState(true)
  const { screenWidth, breakpoint } = windowResize()
  const {
    loadMore,
    handleFilterCategory,
    page,
    setActiveFilter,
    totalPage,
    setTotalPage,
    movieItems,
    setMovieItems,
    setError
  } = useContext(MoviesContext)

  const getMovies = async () => {
    const params = {}
    try {
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      })
      setMovieItems(response.results.slice(0, 6))
      setTotalPage(response.total_pages)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getMovies()
    if (screenWidth <= breakpoint) setDisplay(false)
  }, [])

  return (
    <Container id="catalogue">
      <Header>
        <img src={dot} alt="" />
        <h2>
          <span>catálogo </span>completo
        </h2>
      </Header>
      <ControlPanel>
        <Display>
          <FilterCategory
            onChange={(elem) => handleFilterCategory(elem.target.value)}
            onClick={() => setActiveFilter(true)}
            defaultValue="placeholder"
          >
            <option value="placeholder" disabled>
              por gênero
            </option>
            <option value="all">todos</option>
            {category.map((cate) => (
              <option key={cate.id} value={cate.cateURL}>
                {cate.name}
              </option>
            ))}
          </FilterCategory>
          <PinkButton
            text="mais populares"
            handleClick={() => {
              getMovies()
              setActiveFilter(false)
            }}
          />
        </Display>
        {display ? (
          <Button onClick={() => setDisplay(!display)}>
            <img src={DArrow} alt="" />
            <span>em grid</span>
          </Button>
        ) : (
          <Button onClick={() => setDisplay(!display)}>
            <img src={DArrow} alt="" />
            <span>em lista</span>
          </Button>
        )}
      </ControlPanel>
      <Content list={display}>
        {movieItems.map((item, i) => (
          <CatalogMovieCard key={i} movieInfo={item} list={display} />
        ))}
      </Content>
      {page < totalPage ? (
        <PinkButton
          isCenter={true}
          text="carregar mais"
          handleClick={() => {
            loadMore()
          }}
        />
      ) : null}
    </Container>
  )
}

export default Catalog
