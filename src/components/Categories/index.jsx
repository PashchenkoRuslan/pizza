import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/categorySlice';

function Categories() {
  const category = useSelector((state) => state.allSort.category);
  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианскые', 'Гриль', 'Острые', 'Закрытые'];
  // const [category, setCategory] = React.useState(0);
  return (
    <div class="categories">
      <ul>
        {categories.map((cat, i) => (
          <li onClick={() => dispatch(setCategory(i))} className={category === i ? 'active' : ''}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
