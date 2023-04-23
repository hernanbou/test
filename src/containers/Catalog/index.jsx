import { useEffect, useState } from 'react';

import { CatalogMovieCard } from '../../components/CatalogMovieCard';
import PinkButton from '../../components/PinkButton';
import tmdbApi, { category } from '../../api/tmdbApi';


import {
    Container,
    Header,
    Content,
    ControlPanel,
    Display,
    Button,
    FilterCategory,
} from './styled';
import dot from '../../assets/dot.svg'
import DArrow from '../../assets/d_arrow.svg'


const Catalog = () => {

    const [movieItems, setMovieItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [display, setDisplay] = useState(true);
    const [filter, setFilter] = useState('')

    const handleFilter = (cate) => {
        setFilter(cate);
        getFilter(filter);
    };

    const getMovies = async () => {
        const params = {};
        try {
            const response = await tmdbApi.getMoviesList({ params });
            setMovieItems(response.results.slice(0, 6));
            setTotalPage(response.total_pages);
        } catch {
            console.log('error');
        }
    };

    const getFilter = async (type) => {
        const params = {};
        try {
            const response = await tmdbApi.getFilteredMovie(type, { params });
            setMovieItems(response.results.slice(0, 6));
            setTotalPage(response.total_pages);
        } catch {
            console.log('error');
        }
    };

    const loadMore = async () => {
        const params = {
            page: page + 1
        };
        try {
            const response = await tmdbApi.getMoviesList({ params });
            setMovieItems([...movieItems, ...response.results.slice(0, 6)]);
            setPage(page + 1);
        } catch {
            console.log('error');
        }

    };

    const getCatalog = () => {

        return movieItems.map((item, i) => (
            <CatalogMovieCard
                key={i}
                movieID={item.id}
            />
        ))
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Container id='catalogue'>
            <Header>
                <img src={dot} alt="" />
                <h2><span>catálogo </span>completo</h2>
            </Header>
            <ControlPanel>
                <Display>
                    <FilterCategory
                        onChange={elem => handleFilter(elem.target.value)}
                        defaultValue="placeholder"
                    >
                        <option value="placeholder" disabled>
                            por gênero
                        </option>
                        <option value='all'>todos</option>
                        {
                            category.map(cate => (
                                <option
                                    key={cate.id}
                                    value={cate.cateURL}
                                >
                                    {cate.name}
                                </option>
                            ))
                        }

                    </FilterCategory>
                    <PinkButton
                        text='mais populares'
                        handleClick={() => { getMovies() }}
                    />
                </Display>
                {
                    display === true ?
                        <Button
                            onClick={() => setDisplay(false)}
                        >
                            <img src={DArrow} alt="" />
                            <span>em grid</span>
                        </Button> :
                        <Button
                            onClick={() => setDisplay(true)}
                        >
                            <img src={DArrow} alt="" />
                            <span>em lista</span>
                        </Button>
                }
            </ControlPanel>
            <Content list={display}>
                {getCatalog()}
            </Content>
            {
                page < totalPage ? (
                    <PinkButton
                        isCenter={true}
                        text='carregar mais'
                        handleClick={() => { (loadMore()) }}
                    />
                ) : null
            }
        </Container>
    )
}

export default Catalog;