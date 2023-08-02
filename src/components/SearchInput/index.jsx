import React from 'react';
import styles from './SearchInput.module.scss';
import { SearchContext } from '../../App';

const SearchInput = () => {
  // const [searchTerm, setSearchTerm] = React.useState('');
  const { searchItems, setSearchItems } = React.useContext(SearchContext);

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        setSearchItems(''); // Очищаем значение input
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleSearch = (event) => {
    setSearchItems(event.target.value);
    // onSearch(searchTerm);
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Поиск пицц..."
        value={searchItems}
        onChange={handleSearch}
      />
      <button className={styles.clear} onClick={() => setSearchItems('')}>
        X
      </button>
    </div>
  );
};

export default SearchInput;
