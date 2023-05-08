import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from "./styles/global";



import Router from './config/Router';
import 'swiper/css';
import 'swiper/css/pagination';
import { MoviesProvider } from './contexts/MoviesContext';



function App() {
  return (
    <BrowserRouter>
      <MoviesProvider>
        <Router />
      </MoviesProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;