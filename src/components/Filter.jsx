import css from './App.module.css';
import PropTypes from "prop-types";

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

Filter.propTypes = {
  handleFilter: PropTypes.func,
}

export { Filter }