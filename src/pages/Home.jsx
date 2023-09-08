import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { SearchContext } from '../App';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [sortBy, setSortBy] = React.useState(0);
  // const [currentPage, setCurrentPage] = React.useState(1);
  const sorting = ['rating', 'price', 'title'];
  const { searchItems } = React.useContext(SearchContext);

  const category = useSelector((state) => state.allSort.category);
  const sortBy = useSelector((state) => state.allSort.sortItem);
  const currentPage = useSelector((state) => state.allSort.currentPage);

  const dispatch = useDispatch();

  // Pagination attributes
  const totalPages = 3;
  const elementOfPagination = 4;

  React.useEffect(() => {
    setIsLoading(true);

    //realize with fetch
    // fetch(
    //   `https://64a48816c3b509573b579f95.mockapi.io/pizzas?${
    //     category > 0 ? `category=${category}` : ''
    //   }&sortBy=${
    //     sorting[sortBy]
    //   }&page=${currentPage}&limit=${elementOfPagination}&search=${searchItems}`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setPizzas(arr);
    //     setIsLoading(false);
    //   });

    axios
      .get(
        `https://64a48816c3b509573b579f95.mockapi.io/pizzas?${
          category > 0 ? `category=${category}` : ''
        }&sortBy=${
          sorting[sortBy]
        }&page=${currentPage}&limit=${elementOfPagination}&search=${searchItems}`,
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [category, sortBy, currentPage, searchItems]);

  // React.useEffect(() => {
  //   const queryString = qs.stringify({});
  // }, [category, sortBy, currentPage, searchItems]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1))
  //     console.log(window.location.search);
  //     dispatch(setFilters({...params}))
  //   }
  // });

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((obj, i) => <Skeleton key={i} />)
          : pizzas.map((obj, i) => <PizzaBlock key={i} {...obj} />)}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Home;
