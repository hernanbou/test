import { createContext, useState } from 'react'

import tmdbApi, { movieType, category } from '../api/tmdbApi'

export const MoviesContext = createContext({})

export const MoviesProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)
  const [page, setPage] = useState(1)
  const [filterCategory, setFilterCategory] = useState('')
  const [totalPage, setTotalPage] = useState(0)
  const [movieItems, setMovieItems] = useState([])
  const [error, setError] = useState(null)

  const getCategoryName = (categoryId) => {
    const categoryName = category.find((category) => category.id === categoryId)
    return categoryName?.name || ''
  }

  const categoryName = (cateID) => {
    const cateName = cateID.map(getCategoryName)
    return cateName
  }

  const handleFilterCategory = (type) => {
    setFilterCategory(type)
    getFilter(type)
  }

  const getFilter = async (type) => {
    const params = {}

    if (type === 'all') {
      try {
        const response = await tmdbApi.getMoviesList(movieType.top_rated, {
          params,
        })
        setMovieItems(response.results.slice(0, 6))
        setTotalPage(response.total_pages)
      } catch (error) {
        setError(error)
      }
    } else {
      try {
        const response = await tmdbApi.getFilteredMovie(type, { params })
        setMovieItems(response.results.slice(0, 6))
        setTotalPage(response.total_pages)
      } catch (error) {
        setError(error)
      }
    }
  }

  const loadMore = async () => {
    const params = {
      page: page + 1,
    }

    if (activeFilter) {
      const filter = filterCategory

      if (filter === 'all') {
        try {
          const response = await tmdbApi.getMoviesList(movieType.top_rated, {
            params,
          })
          setMovieItems([...movieItems, ...response.results.slice(0, 6)])
          setPage(page + 1)
        } catch (error) {
          setError(error)
        }
      } else {
        try {
          const response = await tmdbApi.getFilteredMovie(filter, { params })
          setMovieItems([...movieItems, ...response.results.slice(0, 6)])
          setPage(page + 1)
        } catch (error) {
          setError(error)
        }
      }
    } else {
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        })
        setMovieItems([...movieItems, ...response.results.slice(0, 6)])
        setPage(page + 1)
      } catch (error) {
        setError(error)
      }
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        categoryName,
        loadMore,
        handleFilterCategory,
        page,
        setActiveFilter,
        totalPage,
        setTotalPage,
        movieItems,
        setMovieItems,
        openMenu,
        setOpenMenu,
        openSearchBar,
        setOpenSearchBar,
        error,
        setError
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
