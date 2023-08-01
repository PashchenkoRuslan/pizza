import React from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = ({ searchItems, setSearchItems }) => {
  // const [searchTerm, setSearchTerm] = React.useState('');

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
