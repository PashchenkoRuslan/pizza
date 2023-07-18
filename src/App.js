import './App.css';
import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import Skeleton from './components/Skeleton';

// import pizzas from './pizzas.json';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://64a48816c3b509573b579f95.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <body>
        <div class="wrapper">
          <Header />
          <div class="content">
            <div class="container">
              <div class="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 class="content__title">Все пиццы</h2>
              <div class="content__items">
                {isLoading
                  ? [...new Array(8)].map(() => <Skeleton />)
                  : pizzas.map((obj) => <PizzaBlock {...obj} />)}
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
