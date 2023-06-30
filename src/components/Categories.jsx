import React from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианскые', 'Гриль', 'Острые', 'Закрытые'];
  const [category, setCategory] = React.useState(0);

  return (
    <div class="categories">
      <ul>
        {categories.map((cat, i) => (
          <li onClick={() => setCategory(i)} className={category === i ? 'active' : ''}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
