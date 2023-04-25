import css from './App.module.css';

const Filter = ( { handleFilter } ) => {
    return(
      <>
        <p className={css.p}>Find contacts by name</p>
        <input 
        onChange={handleFilter}
        type='text'
        name='filter'
        />
      </>
    )
  }

export { Filter }