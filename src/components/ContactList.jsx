import css from './App.module.css';
import PropTypes from "prop-types";

const ContactList = ( { arr, handleDelete} ) => {
  return (
    <ul>
      {arr.map( person => (
        <li className={css.li} key={person.id}>
          {person.name}: {person.number}
          <button className={css.btndel} onClick={() => handleDelete(person.id)}>Delete</button>
        </li>

      ))}
    </ul> 
  )
}

ContactList.propTypes = {
  arr: PropTypes.array,
  handleDelete: PropTypes.func

}

export { ContactList }