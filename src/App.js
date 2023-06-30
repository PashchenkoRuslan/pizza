import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import pizzas from './pizzas.json';

function App() {
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
                {pizzas.map((obj) => (
                  <PizzaBlock {...obj} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
