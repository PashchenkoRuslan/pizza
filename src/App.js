import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

function App() {
  return (
    <div className="App">
      <body>
        <div class="wrapper">
         <Header />
          <div class="content">
            <div class="container">
              <div class="content__top">
                <Categories/>
                <Sort />
              </div>
              <h2 class="content__title">Все пиццы</h2>
              <div class="content__items">
                <PizzaBlock title='Мексиканская' price='521'/>
                <PizzaBlock title='Узбекская' price='400'/>
                <PizzaBlock title='Французская' price='333'/>
                
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
