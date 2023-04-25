import css from './App.module.css';

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


export { ContactList }