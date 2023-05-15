import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Movie from '../pages/Movie'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/" exact element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
