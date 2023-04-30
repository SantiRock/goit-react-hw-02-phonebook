import css from './App.module.css';
import PropTypes from "prop-types";

const Filter = ( { setFilter, filter } ) => {
    return(
      <>
        <p className={css.p}>Find contacts by name</p>
        <input 
        onChange={setFilter}
        type='text'
        name='filter'
        value={filter}
        />
      </>
    )
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
}

export { Filter }