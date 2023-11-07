import styles from './searchBar.module.css';

export default function SearchBar({ handleChange, handleSubmit }) {
  return (
    <div className={styles['search-container']}>

      <form onSubmit={handleSubmit}>
        <input placeholder='Buscar por nombre...' onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>
      
    </div>
  );
}
