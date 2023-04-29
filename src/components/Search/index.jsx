import { OpenSearch, Container, Content } from './styled'

import mglass from "../../assets/search.svg";
import mglassActive from '../../assets/searchActive.svg';
import { useState } from 'react';



const Search = () => {

  const [active, setActive] = useState(false)

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

      </Content>
    </Container>
  );
}

export default Search;