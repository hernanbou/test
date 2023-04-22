import { BrowserRouter } from 'react-router-dom';
import Router from './config/Router';
import { GlobalStyle } from "./styles/global";
import 'swiper/css';
import 'swiper/css/pagination';


function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;