import { useEffect, useState } from 'react';

import { CatalogMovieCard } from '../../components/CatalogMovieCard';
import PinkButton from '../../components/PinkButton';
import tmdbApi, { movieType, category } from '../../api/tmdbApi';


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
    const [activeFilter, setActiveFilter] = useState(false);
    const [filterCategory, setFilterCategory] = useState('')

    const handleFilterCategory = (type) => {

        setFilterCategory(type);
        getFilter(type);
    };

    const getMovies = async () => {
        const params = {};
        try {
            const response = await tmdbApi.getMoviesList(movieType.popular, { params });
            setMovieItems(response.results.slice(0, 6));
            setTotalPage(response.total_pages);
        } catch {
            console.log('error');
        }
    };

    const getFilter = async (type) => {

        let params = {};

        if (type === 'all') {
            try {
                const response = await tmdbApi.getMoviesList(movieType.top_rated, { params });
                setMovieItems(response.results.slice(0, 6));
                setTotalPage(response.total_pages);
            } catch {
                console.log('error');
            }
        } else {

            try {
                const response = await tmdbApi.getFilteredMovie(type, { params });
                setMovieItems(response.results.slice(0, 6));
                setTotalPage(response.total_pages);
            } catch {
                console.log('error');
            }
        }
    };


    const loadMore = async () => {

        let params = {
            page: page + 1
        };

        if (activeFilter) {
            let filter = filterCategory;

            if (filter === 'all') {
                try {
                    const response = await tmdbApi.getMoviesList(movieType.top_rated, { params });
                    setMovieItems([...movieItems, ...response.results.slice(0, 6)]);
                    setPage(page + 1);
                } catch {
                    console.log('error');
                }
            } else {

                try {
                    const response = await tmdbApi.getFilteredMovie(filter, { params });
                    setMovieItems([...movieItems, ...response.results.slice(0, 6)]);
                    setPage(page + 1);
                } catch {
                    console.log('error');
                }
            }

        } else {
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems([...movieItems, ...response.results.slice(0, 6)]);
                setPage(page + 1);
            } catch {
                console.log('error');
            }
        }
    };

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
                        onChange={elem => handleFilterCategory(elem.target.value)}
                        onClick={() => setActiveFilter(true)}
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
                        handleClick={() => { getMovies(); setActiveFilter(false) }}
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
                {
                    movieItems.map((item, i) => (
                        <CatalogMovieCard
                            key={i}
                            movieInfo={item}
                            list={display}
                        />
                    ))
                }
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
        </Container >
    )
}

export default Catalog;