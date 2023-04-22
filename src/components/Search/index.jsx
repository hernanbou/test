import { Container } from './styled'

import search from "../../assets/search.svg";
// import searchActive from '../../assets/searchActive.svg';

const Search = () => {
  return (
    <Container>
      <img src={search} alt="Search" />
    </Container>
  );
}

export default Search;