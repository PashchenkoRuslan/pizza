import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

const Home = ({ searchItems }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sortBy, setSortBy] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const sorting = ['rating', 'price', 'title'];

  // Pagination attributes
  const totalPages = 3;
  const elementOfPagination = 4;

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://64a48816c3b509573b579f95.mockapi.io/pizzas?${
        category > 0 ? `category=${category}` : ''
      }&sortBy=${
        sorting[sortBy]
      }&page=${currentPage}&limit=${elementOfPagination}&search=${searchItems}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
  }, [category, sortBy, currentPage, searchItems]);

  return (
    <div class="container">
      <div class="content__top">
        <Categories setCategory={setCategory} category={category} />
        <Sort setSortItem={setSortBy} sortItem={sortBy} />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {isLoading
          ? [...new Array(8)].map(() => <Skeleton />)
          : pizzas.map((obj) => <PizzaBlock {...obj} />)}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;
